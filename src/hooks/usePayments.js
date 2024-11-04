import { useSelector } from 'react-redux';

import {
  selectFilter,
  selectPayments,
  selectIsLoading,
  selectError,
  selectCompleted,
  selectedVisiblePayments,
} from '../redux/payments/paymentsSelectors';

export const usePayments = () => {
  const filter = useSelector(selectFilter);
  const payments = useSelector(selectPayments);
  const isLoading = useSelector(selectIsLoading);
  const errorPayments = useSelector(selectError);
  const completed = useSelector(selectCompleted);
  const visiblePayments = useSelector(selectedVisiblePayments);

  return {
    filter,
    payments,
    isLoading,
    errorPayments,
    completed,
    visiblePayments,
  };
};
