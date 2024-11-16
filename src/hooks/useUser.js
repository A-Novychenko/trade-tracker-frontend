import { useSelector } from 'react-redux';
import {
  selectUserAllTransactions,
  selectWithdrawTransactions,
  selectDepositTransactions,
  selectUserIsLoading,
  selectUserIsError,
  selectConditions,
  selectWallet,
} from '../redux/user/userSelectors.js';

export const useUser = () => {
  const userTransactions = useSelector(selectUserAllTransactions);
  const userIsLoading = useSelector(selectUserIsLoading);
  const userIsError = useSelector(selectUserIsError);
  const withdrawTransactions = useSelector(selectWithdrawTransactions);
  const depositTransactions = useSelector(selectDepositTransactions);
  const conditions = useSelector(selectConditions);
  const wallet = useSelector(selectWallet);

  return {
    userTransactions,
    withdrawTransactions,
    depositTransactions,
    userIsLoading,
    userIsError,
    conditions,
    wallet,
  };
};
