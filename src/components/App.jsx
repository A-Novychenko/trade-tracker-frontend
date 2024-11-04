import { lazy, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { Layout } from 'components/Layout';
import { Loader } from 'components/Loader';
import { SnackError, SnackSuccess, SnackWarning } from 'components//SnackBar';

import { refreshUser } from '../redux/auth/authOperations';
import { useAuth, usePayments } from '../hooks';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const VerifyEmail = lazy(() => import('../pages/VerifyEmail'));
const DashboardPage = lazy(() => import('../pages/Dashboard'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing, error, isLoggedIn, isLoading } = useAuth();
  const { completed, errorPayments } = usePayments();

  const [isSuchPayment, setIsSuchPayment] = useState(false);
  const [showSnackErr, setShowSnackErr] = useState(false);
  const [showSnackWarning, setShowSnackWarning] = useState(false);
  const [showSnackCompleted, setShowSnackCompleted] = useState(false);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  useEffect(() => {
    if (
      (error && error !== 'Unable to fetch user' && !isLoggedIn) ||
      errorPayments
    ) {
      setShowSnackErr(true);
    }
    if (error && isLoggedIn) {
      setShowSnackErr(true);
    }
  }, [error, errorPayments, isLoggedIn, setShowSnackErr]);

  useEffect(() => {
    if (!completed) return;
    setShowSnackCompleted(true);
  }, [completed, setShowSnackCompleted]);

  useEffect(() => {
    if (!isSuchPayment) {
      setShowSnackWarning(false);
      return;
    }
    setShowSnackWarning(true);
  }, [isSuchPayment, setShowSnackWarning]);

  const handleIsSuchPayment = text => {
    setIsSuchPayment(text);
  };

  return isRefreshing || isLoading ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />

          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/dashboard"
                component={<RegisterPage />}
              />
            }
          />

          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/dashboard"
                component={<LoginPage />}
              />
            }
          />

          <Route
            path="/verify"
            element={
              <RestrictedRoute
                redirectTo="/dashboard"
                component={<VerifyEmail />}
              />
            }
          />

          <Route
            path="/dashboard"
            element={
              <PrivateRoute
                redirectTo="/login"
                component={
                  <DashboardPage handleIsSuchPayment={handleIsSuchPayment} />
                }
              />
            }
          />
        </Route>
      </Routes>

      <SnackError
        sx={{ width: '100%' }}
        isOpen={showSnackErr}
        handleClose={() => setShowSnackErr(false)}
        text={error || errorPayments}
      />

      <SnackWarning
        sx={{ width: '100%' }}
        isOpen={showSnackWarning}
        handleClose={() => {
          setShowSnackWarning(false);
          setIsSuchPayment(false);
        }}
        text={isSuchPayment}
      />

      <SnackSuccess
        sx={{ width: '100%' }}
        isOpen={showSnackCompleted}
        handleClose={() => setShowSnackCompleted(false)}
      />
    </>
  );
};
