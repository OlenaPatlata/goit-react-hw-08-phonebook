import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import HomePage from 'pages/HomePage';
import PhonebookPage from 'pages/PhonebookPage';

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/phonebook">
          <PhonebookPage />
        </Route>
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;
