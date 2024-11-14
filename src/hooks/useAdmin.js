import { useSelector } from 'react-redux';
import {
  selectAdminAllTransactions,
  selectAdminAllUsers,
  isAdminLoading,
  isAdminError,
  selectCondition,
  selectWallet,
} from '../redux/admin/adminSelectors';

export const useAdmin = () => {
  const allTransactions = useSelector(selectAdminAllTransactions);
  const allUsers = useSelector(selectAdminAllUsers);
  const isLoading = useSelector(isAdminLoading);
  const isError = useSelector(isAdminError);
  const condition = useSelector(selectCondition);
  const wallet = useSelector(selectWallet);

  return {
    allTransactions,
    allUsers,
    condition,
    wallet,
    isLoading,
    isError,
  };
};
