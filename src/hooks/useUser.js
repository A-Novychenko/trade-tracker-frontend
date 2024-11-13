import { useSelector } from 'react-redux';
import {
  selectUserAllTransactions,
  selectWithdrawTransactions,
  selectDepositTransactions,
  selectUserIsLoading,
  selectUserIsError,
} from '../redux/user/userSelectors.js';

export const useUser = () => {
  const userTransactions = useSelector(selectUserAllTransactions);
  const userIsLoading = useSelector(selectUserIsLoading);
  const userIsError = useSelector(selectUserIsError);
  const withdrawTransactions = useSelector(selectWithdrawTransactions);
  const depositTransactions = useSelector(selectDepositTransactions);

  return {
    userTransactions,
    withdrawTransactions,
    depositTransactions,
    userIsLoading,
    userIsError,
  };
};
