import { useState } from 'react';

import { Typography } from '@mui/material';
import { toast } from 'react-toastify';

import { ModalForm } from 'components/ModalForm';

import { useLang } from 'hooks';
import { serverAPI } from 'utils/serverAPI';

import { EditBtn, Wrap } from './ChangeAmountForm.styled';

export const ChangeAmountForm = ({ currentAmount, id, setUser }) => {
  const { defaultLang } = useLang();

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
      if (amount < 0 || amount === null || amount === undefined) {
        throw new Error();
      }

      setStatus('pending');

      const { data } = await serverAPI.patch(`/admin/investment/${id}`, {
        investment: amount,
      });

      const { investment, total } = data.data.user.investment;

      setUser(pSt => ({
        ...pSt,
        investment: { ...pSt.investment, investment, total },
      }));

      toast.success(defaultLang ? 'Успешно изменено' : 'Successful');
    } catch {
      toast.error(defaultLang ? 'Ошибка' : 'Error');
    } finally {
      setStatus(null);
      handleCloseModal();
    }
  };

  return (
    <>
      <EditBtn type="button" onClick={handleOpenModal}>
        {defaultLang ? 'Изменить сумму инвестиций' : 'Change investment amount'}
      </EditBtn>

      <ModalForm
        title={
          defaultLang ? 'Изменить сумму инвестиций' : 'Change investment amount'
        }
        text=""
        open={openModal}
        status={status}
        handleClose={handleCloseModal}
        handleSubmit={handleSubmit}
      >
        <Typography sx={{ mb: 2 }}>
          {`
            ${defaultLang ? 'Текущая сумма' : 'Current amount'}: 
            ${currentAmount}`}
        </Typography>

        <Wrap>
          <span> {defaultLang ? 'Сумма' : 'Amount'}</span>
          <input
            autoFocus
            required
            id="message"
            name="amount"
            type="number"
            step="any"
            style={{
              fontSize: 18,
              padding: 8,
            }}
          />
        </Wrap>
      </ModalForm>
    </>
  );
};
