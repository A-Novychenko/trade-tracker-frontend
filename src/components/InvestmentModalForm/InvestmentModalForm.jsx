import { useState } from 'react';

import { TextField, Typography } from '@mui/material';

import { ModalForm } from 'components/ModalForm';

import { useAuth, useLang } from 'hooks';

import { useDispatch } from 'react-redux';
import { setCompleted, setError } from '@/payments/paymentsSlice';
import { addUserTransactionDeposit } from '@/user/userOperation';

import { InvestBtn, Wrap } from './InvestmentModalForm.styled';

const WALLET = '0xce31c05d085116d4db66385f224aca8c98de7490';
const TEXT = `ВАЖНО 

	 1. Сеть: Убедитесь, что вы отправляете USDT через сеть TRC20 
(Tron). Переводы через другие сети (например, ERC20, BEP20) не будут 
доставлены, и средства могут быть утеряны.

	 2. Адрес получателя: Точно скопируйте адрес, указанный вам 
для перевода. Адрес должен начинаться с “T”, так как это стандарт 
для адресов сети TRC20. Проверьте, что не добавлены лишние 
символы или пробелы.

	 3. Проверка перед отправкой: Перепроверьте адрес и сеть 
перед подтверждением транзакции, так как ошибки могут привести к 
потере средств, и их будет невозможно восстановить.

	 4. После отправки Tether USDT TRC20 на указанный адрес, 
укажите отправленную Вами сумму, нажмите кнопку Отправлено. Как 
только актив поступит на указанный адрес в личном кабинете 
появится статус зачислено`;

export const InvestmentModalForm = () => {
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

    try {
      if (!amount) {
        throw new Error();
      }

      setStatus('pending');

      await dispatch(
        addUserTransactionDeposit({
          amount,
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
      <InvestBtn type="button" onClick={handleOpenModal}>
        {defaultLang ? 'Инвестировать' : 'Invest'}
      </InvestBtn>

      <ModalForm
        title={defaultLang ? 'Инвестировать средства' : 'Invest Funds'}
        text=""
        open={openModal}
        status={status}
        handleClose={handleCloseModal}
        handleSubmit={handleSubmit}
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

        <Typography sx={{ mb: 4 }}>{WALLET}</Typography>

        <Typography>{TEXT}</Typography>
      </ModalForm>
    </>
  );
};