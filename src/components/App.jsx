import { lazy, Suspense, Fragment, React } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Loader from 'components/Loader/Loader';
import AppBar from 'components/AppBar/AppBar';
import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';
import { useFetchUserCurrentQuery } from 'redux/auth/authApi';
import { getToken } from 'redux/auth/token-selectors';

const LazyHomePage = lazy(() =>
  import('pages/HomePage' /* webpackChunkName: "HomePage" */)
);

const LazyPhonebookPage = lazy(() =>
  import('pages/PhonebookPage' /* webpackChunkName: "PhonebookPage" */)
);
const LazyRegisterPage = lazy(() =>
  import('pages/RegisterPage' /* webpackChunkName: "RegisterPage" */)
);
const LazyLoginPage = lazy(() =>
  import('pages/LoginPage' /* webpackChunkName: "LoginPage" */)
);
const LazyNotFoundPage = lazy(() =>
  import('pages/NotFoundPage' /* webpackChunkName: "NotFoundPage" */)
);

const App = () => {
  const token = useSelector(getToken);
  const { isSuccess, isFetching } = useFetchUserCurrentQuery(null, {
    skip: !token,
  });
  if (isFetching) return <Loader />;
  return (
    <>
      <Fragment>
        <AppBar />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<LazyHomePage />} />
            <Route
              path="register"
              element={
                <PublicRoute restricted>
                  <LazyRegisterPage />
                </PublicRoute>
              }
            />

            <Route
              path="login"
              element={
                <PublicRoute restricted>
                  <LazyLoginPage />
                </PublicRoute>
              }
            />

            <Route
              path="phonebook"
              element={
                <PrivateRoute>
                  <LazyPhonebookPage />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<LazyHomePage />} />
          </Routes>
        </Suspense>
      </Fragment>
    </>
  );
};

export default App;
