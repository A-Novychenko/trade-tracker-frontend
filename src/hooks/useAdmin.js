import { useSelector } from 'react-redux';
import {
  selectAdminAllTransactions,
  selectAdminAllUsers,
  isAdminLoading,
  isAdminError,
} from '../redux/admin/adminSelectors';

export const useAdmin = () => {
  const allTransactions = useSelector(selectAdminAllTransactions);
  const allUsers = useSelector(selectAdminAllUsers);
  const isLoading = useSelector(isAdminLoading);
  const isError = useSelector(isAdminError);

  return {
    allTransactions,
    allUsers,
    isLoading,
    isError,
  };
};
