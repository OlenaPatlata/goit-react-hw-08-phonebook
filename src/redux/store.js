import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import rootReducer from 'redux/phonebook/phonebook-reducer';
import { phonebookApi } from './phonebook/phonebookApi';

const customMiddleWare = store => next => action => {
  console.log('state', store.getState());
  console.log('Middleware triggered:', action);
  next(action);
};

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat(customMiddleWare)
      .concat(phonebookApi.middleware),
  devTools: process.env.NODE_ENV === 'development',
});
setupListeners(store.dispatch);

export default store;
