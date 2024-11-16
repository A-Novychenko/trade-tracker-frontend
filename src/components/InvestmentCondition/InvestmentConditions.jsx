import { useLang, useUser } from 'hooks';
import { Wrapper } from './InvestmentConditions.styled';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getConditions } from '../../redux/user/userOperation';

export const InvestmentConditions = () => {
  const { defaultLang } = useLang();
  const { conditions } = useUser();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getConditions());
  }, []);

  return (
    <Wrapper>
      <strong>
        {defaultLang
          ? 'Условия ввода/вывода средств'
          : 'Terms of replenishment/withdrawal of funds'}
      </strong>
      <p>{conditions?.length > 1 ? conditions : '1'}</p>
    </Wrapper>
  );
};
