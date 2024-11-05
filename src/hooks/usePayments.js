import { useSelector } from 'react-redux';

import {
  selectPayments,
  selectIsLoading,
  selectError,
  selectCompleted,
} from '../redux/payments/paymentsSelectors';

export const usePayments = () => {
  const payments = useSelector(selectPayments);
  const isLoading = useSelector(selectIsLoading);
  const errorPayments = useSelector(selectError);
  const completed = useSelector(selectCompleted);

  return {
    payments,
    isLoading,
    errorPayments,
    completed,
  };
};
