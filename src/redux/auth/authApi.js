import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
    prepareHeaders: (headers, { getState }) => {
      console.log(getState().token?.token);

      const token = getState().token?.token;
      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),

  endpoints: builder => ({
    //   запит за створення user
    addUser: builder.mutation({
      query: data => ({
        url: '/users/signup',
        method: 'POST',
        body: {
          name: data.name,
          email: data.email,
          password: data.password,
        },
      }),
      providesTags: ['user'],
      invalidatesTags: ['user'],
    }),
    //   запит залогінити user
    loginUser: builder.mutation({
      query: data => ({
        url: '/users/login',
        method: 'POST',
        body: {
          email: data.email,
          password: data.password,
        },
      }),
      providesTags: ['user'],
    }),
    //   запит разлогінити user
    logoutUser: builder.mutation({
      query: () => ({
        url: '/users/logout',
        method: 'POST',
      }),
      providesTags: ['user'],
    }),
    //   запит на отримання інформації про поточного user
    fetchUserCurrent: builder.query({
      query: () => ({ url: `/users/current`, method: 'GET' }),
    }),
    //   запит за всіма контактами
    fetchContacts: builder.query({
      query: () => ({ url: '/contacts', method: 'GET' }),
      providesTags: ['contacts'],
    }),
    //    запит на додавання контакту
    addContact: builder.mutation({
      query: data => ({
        url: `/contacts`,
        method: 'POST',
        body: {
          name: data.name,
          number: data.number,
        },
      }),
      tagTypes: ['contacts'],
      invalidatesTags: ['contacts'],
    }),
    //    запит на видалення контакту
    deleteContact: builder.mutation({
      query: data => ({
        url: `/contacts/${data}`,
        method: 'DELETE',
      }),
      tagTypes: ['contacts'],
      invalidatesTags: ['contacts'],
    }),
  }),
});

export const {
  useFetchUserCurrentQuery,
  useAddUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
  useFetchContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = authApi;
