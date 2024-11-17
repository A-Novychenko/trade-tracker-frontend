import { useState } from 'react';

import { Typography } from '@mui/material';
import { toast } from 'react-toastify';

import { ModalForm } from 'components/ModalForm';

import { useLang } from 'hooks';
import { serverAPI } from 'utils/serverAPI';

import { EditBtn, Wrap } from './ChangeProfitForm.styled';

export const ChangeProfitForm = ({ currentProfit, id, setUser }) => {
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
    const newProfit = Number(formJson.profit);

    try {
      if (amount < 0 || amount === null || amount === undefined) {
        throw new Error();
      }

      setStatus('pending');

      console.log('profit', newProfit);

      const { data } = await serverAPI.patch(`/admin/profit/${id}`, {
        profit: newProfit,
      });

      const { investment, profit, total } = data.data.user.investment;

      setUser(pSt => ({
        ...pSt,
        investment: { ...pSt.investment, investment, profit, total },
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
        {defaultLang ? 'Изменить сумму прибыли' : 'Change profit amount'}
      </EditBtn>

      <ModalForm
        title={defaultLang ? 'Изменить сумму прибыли' : 'Change profit amount'}
        text=""
        open={openModal}
        status={status}
        handleClose={handleCloseModal}
        handleSubmit={handleSubmit}
      >
        <Typography sx={{ mb: 2 }}>
          {`
            ${defaultLang ? 'Текущая прибыль' : 'Current profit'}:
            ${currentProfit}`}
        </Typography>

        <Wrap>
          <span> {defaultLang ? 'Прибыль' : 'Profit'}</span>
          <input
            autoFocus
            required
            id="message"
            name="profit"
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
