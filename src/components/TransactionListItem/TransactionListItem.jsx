// import { useState } from 'react';
import { TableRow, TableItem, DetailBtn } from './TransactionListItem.styled';
import { useLang } from 'hooks';
// import { Modal } from '@mui/material';

export const TransactionListItem = ({ data }) => {
  // const [isOpen, setIsOpen] = useState(false);

  // const toggleModal = () => {
  //   setIsOpen(prev => !prev);
  // };

  const { defaultLang } = useLang();

  return (
    <>
      <TableRow>
        <TableItem>No date</TableItem>
        <TableItem>{data.type}</TableItem>
        <TableItem>{data.amount}</TableItem>

        <TableItem>
          {data.approved
            ? defaultLang
              ? 'Подтверджена'
              : 'approved'
            : defaultLang
            ? 'Ожидает подтверджения'
            : 'Wait approving'}
        </TableItem>
        {/* <TableItem>
          <DetailBtn type="button">
            {defaultLang ? 'Детали' : 'Details'}
          </DetailBtn>
        </TableItem> */}
      </TableRow>
      {/* {isOpen && (
        <Modal
          open={isOpen}
          onClose={toggleModal}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div>dfdsfdsfdsfdsf</div>
        </Modal>
      )} */}
    </>
  );
};
