import { useSelector } from 'react-redux';

import {
  selectIsLoggedIn,
  selectUser,
  selectIsRefreshing,
  selectError,
  selectVerify,
  selectIsLoading,
} from '../redux/auth/authSelectors';

export const useAuth = () => {
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const error = useSelector(selectError);
  const verify = useSelector(selectVerify);
  const isLoading = useSelector(selectIsLoading);

  return { user, isLoggedIn, isRefreshing, error, verify, isLoading };
};
