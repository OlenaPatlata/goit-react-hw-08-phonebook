import { createSlice } from '@reduxjs/toolkit';

const initialStateToken = {
  user: { name: null, email: null },
  token: '',
  isLogged: false,
};

const tokenSlice = createSlice({
  name: 'token',
  initialState: initialStateToken,
  reducers: {
    myActionToken: (state, action) => {
      console.log(state.isLogged);

      state.token = action.payload.data.token;
    },
    loggedOn: (state, action) => (state.isLogged = true),
    loggedOut: (state, action) => {
      state.isLogged = false;
      state.token = '';
    },
  },
});

export const { myActionToken, loggedOn, loggedOut } = tokenSlice.actions;
export const tokenReducer = tokenSlice.reducer;
