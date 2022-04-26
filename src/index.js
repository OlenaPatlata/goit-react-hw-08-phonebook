import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import App from 'components/App';
import './index.css';
import store from 'redux/store';

// const reducer = (state = {}, action) => state;
// const store = createStore(reducer, composeWithDevTools());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
