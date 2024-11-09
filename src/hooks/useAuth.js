import { useSelector } from 'react-redux';

import {
  selectIsLoggedIn,
  selectUser,
  selectIsRefreshing,
  selectError,
  selectVerify,
  selectIsLoading,
  selectIsAdmin,
} from '../redux/auth/authSelectors';

export const useAuth = () => {
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const error = useSelector(selectError);
  const verify = useSelector(selectVerify);
  const isLoading = useSelector(selectIsLoading);
  const isAdmin = useSelector(selectIsAdmin);

  return { user, isLoggedIn, isRefreshing, error, verify, isLoading, isAdmin };
};
