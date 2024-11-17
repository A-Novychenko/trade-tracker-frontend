import { useState } from 'react';

import { TextField, Typography } from '@mui/material';

import { ModalForm } from 'components/ModalForm';

import { useAuth, useLang } from 'hooks';

import { useDispatch } from 'react-redux';
import { setCompleted, setError } from '@/payments/paymentsSlice';
import { addUserTransactionWithdraw } from '@/user/userOperation';

import { WithdrawalBtn, Wrap } from './WithdrawalModalForm.styled';

const TEXT = `ВАЖНО 
	 1. Сеть: Убедитесь, что вы отправляете Tether USDT на кошелек 
сети TRC20 (Tron). Переводы на кошельки других сетей (например, 
ERC20, BEP20) не будут доставлены, и средства могут быть утеряны.

	 2. Адрес получателя: Точно скопируйте адрес кошелька для 
перевода. Адрес должен начинаться с “T”, так как это стандарт для 
адресов сети TRC20. Проверьте, что не добавлены лишние символы 
или пробелы.`;

export const WithdrawalModalForm = () => {
  const dispatch = useDispatch();

  const { defaultLang } = useLang();
  const { user } = useAuth();

  const [openModal, setOpenModal] = useState(false);
  const [status, setStatus] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setStatus(null);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
    const amount = Number(formJson.amount);
    const wallet = formJson.wallet;

    try {
      if (!amount) {
        throw new Error();
      }

      setStatus('pending');

      await dispatch(
        addUserTransactionWithdraw({
          amount,
          wallet,
          name: user.name,
          id: user.id,
          email: user.email,
        })
      );

      dispatch(
        setCompleted(`${defaultLang ? 'Успешно отпралено' : 'Successful'}`)
      );
    } catch {
      dispatch(
        setError(
          `${
            defaultLang
              ? 'Ошибка, попробуйте позже'
              : 'Error, please try again later.'
          }`
        )
      );
    } finally {
      setStatus(null);
      handleCloseModal();
    }
  };

  return (
    <>
      <WithdrawalBtn type="button" onClick={handleOpenModal}>
        {defaultLang ? 'Снять' : 'Withdrawal'}
      </WithdrawalBtn>

      <ModalForm
        title={defaultLang ? 'Вывести средства' : 'Withdraw funds'}
        text=""
        open={openModal}
        status={status}
        handleClose={handleCloseModal}
        handleSubmit={handleSubmit}
        sendName={defaultLang ? 'Вывести' : 'Withdrawal'}
      >
        <Wrap>
          <span> {defaultLang ? 'Сумма USDT TRC20' : 'Amount USDT TRC20'}</span>
          <TextField
            autoFocus
            required
            fullWidth
            margin="dense"
            id="message"
            name="amount"
            type="number"
            variant="filled"
            sx={{
              '& .MuiInputBase-input': {
                color: '#fff',
                bgcolor: 'rgba(139, 141, 255, 0.5)',
                fontSize: 18,
              },
            }}
          />
        </Wrap>

        <Wrap>
          <span>
            {defaultLang
              ? 'Адрес для вывода Tether USDT TRС20'
              : 'Address for withdrawal Tether USDT TRС20'}
          </span>
          <TextField
            autoFocus
            required
            fullWidth
            margin="dense"
            id="message"
            name="wallet"
            variant="filled"
            sx={{
              '& .MuiInputBase-input': {
                color: '#fff',
                bgcolor: 'rgba(139, 141, 255, 0.5)',
                fontSize: 18,
              },
            }}
          />
        </Wrap>

        <Typography>{TEXT}</Typography>
      </ModalForm>
    </>
  );
};
