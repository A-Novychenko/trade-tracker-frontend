import { useSelector } from 'react-redux';
import {
  selectUserAllTransactions,
  selectWithdrawTransactions,
  selectDepositTransactions,
  selectUserIsLoading,
  selectUserIsError,
  selectConditions,
} from '../redux/user/userSelectors.js';

export const useUser = () => {
  const userTransactions = useSelector(selectUserAllTransactions);
  const userIsLoading = useSelector(selectUserIsLoading);
  const userIsError = useSelector(selectUserIsError);
  const withdrawTransactions = useSelector(selectWithdrawTransactions);
  const depositTransactions = useSelector(selectDepositTransactions);
  const conditions = useSelector(selectConditions);

  return {
    userTransactions,
    withdrawTransactions,
    depositTransactions,
    userIsLoading,
    userIsError,
    conditions,
  };
};
