import { useState } from 'react';
import { TableRow, TableItem, DetailBtn } from './TransactionListItem.styled';
import { useLang } from 'hooks';

export const TransactionListItem = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { defaultLang } = useLang();

  return (
    <TableRow>
      <TableItem>17.05.2023</TableItem>
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
      <TableItem>
        <DetailBtn type="button">
          {defaultLang ? 'Детали' : 'Details'}
        </DetailBtn>
      </TableItem>
    </TableRow>
  );
};
