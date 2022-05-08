import React from 'react';
import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import AppBar from 'components/AppBar/AppBar';

// import HomePage from 'pages/HomePage';
// import PhonebookPage from 'pages/PhonebookPage';
// import RegisterPage from 'pages/RegisterPage';
// import NotFoundPage from 'pages/NotFoundPage';
// import LoginPage from 'pages/LoginPage';
// import AuthorizationPage from 'pages/AuthorizationPage';

const LazyHomePage = lazy(() =>
  import('pages/HomePage' /* webpackChunkName: "HomePage" */)
);
// const LazyAuthorizationPage = lazy(() =>
//   import('pages/AuthorizationPage' /* webpackChunkName: "AuthorizationPage" */)
// );
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
  return (
    <>
      <Suspense fallback={<Loader />}>
        <AppBar />
        <Routes>
          <Route path="/" element={<LazyHomePage />} />
          {/* <Route path="auth" element={<LazyAuthorizationPage />} /> */}
          <Route path="register" element={<LazyRegisterPage />} />
          <Route path="login" element={<LazyLoginPage />} />
          <Route path="phonebook" element={<LazyPhonebookPage />} />
          <Route path="*" element={<LazyNotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
