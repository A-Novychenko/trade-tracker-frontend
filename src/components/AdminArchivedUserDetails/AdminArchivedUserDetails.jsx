import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

// import { useLang } from '../../hooks';

import { getFormattedDate } from '../../utils/getFormattedDate';

import { AiOutlineCheck } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';

import {
  ImgWrapper,
  CardWrapper,
  ValueWrap,
  ListItem,
  Image,
  TransactionList,
  TransactionItem,
  CardContainer,
  TitleList,
} from './AdminArchivedUserDetails.styled';

import { setError } from '@/payments/paymentsSlice';
import { serverAPI } from 'utils/serverAPI';

export const AdminArchivedUserDetails = () => {
  const { id } = useParams();

  // const { defaultLang } = useLang();

  const [archivedUser, setArchivedUser] = useState([]);

  useEffect(() => {
    const getArchivedUsers = async () => {
      try {
        const { data } = await serverAPI.get('/admin/archived');

        const user = data.users && data.users.find(({ _id }) => _id === id);

        setArchivedUser(user);
      } catch (e) {
        setError(`Get users error ${e.message}`);
      }
    };
    getArchivedUsers();
  }, [id]);

  const formattedDate = getFormattedDate(archivedUser?.createdAt);

  return (
    <div>
      <CardContainer>
        {archivedUser && (
          <CardWrapper>
            <ImgWrapper>
              <Image alt="user" src={`http:${archivedUser.avatarURL}`} />
            </ImgWrapper>
            <ListItem>
              ID: <ValueWrap>{archivedUser?._id}</ValueWrap>
            </ListItem>
            <ListItem>
              Name: <ValueWrap>{archivedUser?.name}</ValueWrap>
            </ListItem>
            <ListItem style={{ display: 'block' }}>
              <div style={{ display: 'flex' }}>
                Email: <ValueWrap>{archivedUser?.email}</ValueWrap>
              </div>
            </ListItem>
            <ListItem>
              Percentage:{' '}
              <ValueWrap>
                {archivedUser?.investment?.percentage || 0}%
              </ValueWrap>
            </ListItem>
            <ListItem>
              Investment:{' '}
              <ValueWrap>{archivedUser?.investment?.total || 0}</ValueWrap>
            </ListItem>
            <ListItem>
              Profit:{' '}
              <ValueWrap>{archivedUser?.investment?.profit || 0}</ValueWrap>
            </ListItem>
            <ListItem>
              Registration Date:{' '}
              <ValueWrap>{formattedDate || 'No date'}</ValueWrap>
            </ListItem>
          </CardWrapper>
        )}

        <TransactionList>
          <TitleList>Transactions history</TitleList>
          {archivedUser &&
            archivedUser.transactions &&
            archivedUser.transactions.map((transaction, idx) => {
              const { _id, type, amount, approved, createdAt } = transaction;
              const formattedDate = getFormattedDate(createdAt);
              return (
                <TransactionItem key={idx}>
                  <p>{formattedDate}</p>
                  <p>{_id}</p>
                  <p>{type}</p>
                  <p>{amount}</p>
                  <p>
                    {approved ? (
                      <>
                        Approved <AiOutlineCheck size={20} color="#07ff07" />
                      </>
                    ) : (
                      <>
                        Not approved <AiOutlineClose size={20} color="red" />
                      </>
                    )}
                  </p>
                </TransactionItem>
              );
            })}
        </TransactionList>
      </CardContainer>
    </div>
  );
};
