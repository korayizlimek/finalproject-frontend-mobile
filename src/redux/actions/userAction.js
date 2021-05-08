import * as axios from 'axios';
import {api} from '../../api';
import React from 'react';

export function addToUser = userObj => {
  return dispatch => {
    console.log('calisti action');
    console.log();

    // const kullanici = {
    //     name: "yeees",
    //     surname: "yeees",
    //     userName: "yeeesesss",
    //     email: "yeeesees@gmail.com",
    //     password: "123456",
    // };

    const headers = {
      'Content-Type': 'application/json',
    };

    axios
      .post('/api/users', userObj, {
        headers,
      })
      // .post("/users", kullanici)
      .then(response => {
        console.log('calisti post');
        console.log(response);
        dispatch({
          type: 'ADD_TO_USER',
          payload: response.data,
        });
      })
      .catch(error => {
        console.log('calismadi post');
        console.log(error.response);

        dispatch({
          type: 'ADD_TO_USER_ERROR',
          payload: 'Kayit Basarisiz by Action',
        });
      });
    console.log('bitti');
  };
};

export function showAllUsers = () => {
  console.log('calisti SHOW');

  return dispatch => {
    api()
      .get('/api/users')
      .then(response => {
        console.log('YEEEEEEEES SHOW ');
        console.log(response);

        // dispatch({ type: "ALL_USERS", payload: response.data });
      })
      .catch(error => {
        console.log('calismadi SHOW ', error.response);
        dispatch({
          type: 'ALL_USERS_ERROR',
          payload: 'USER GETIRILEMEDI BY ACTIOn',
        });
      });
  };
};

export function getUser = userObj => {
  const headers = {
    'Content-Type': 'application/json',
  };

  return (dispatch, getState) => {
    axios
      .post('/api/users/login', userObj, {
        headers,
      })
      .then(response => {
        console.log('giris islem BASARILI');
        console.log(response.data.user);
        dispatch({
          type: 'GET_USER',
          payload: response.data.user,
        });

        localStorage.setItem(
          'cartsssss',
          JSON.stringify(getState().cart.cartItems),
        );
      })
      .catch(error => {
        dispatch({
          type: 'GET_USER_ERROR',
          payload: 'Kayit basarisiz',
        });
      });
  };
};

export function getUserMe = () => {
  return (dispatch, getState) => {
    const headers = {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDc2OGFlZTJmM2VkODAzZTQyOTkyMjAiLCJlbWFpbCI6Im9ybmVrZ2lyaXNAZ21haWwuY29tIiwiaWF0IjoxNjE4NDA2NzcxLCJleHAiOjE2MTg0MTAzNzF9.eFr_JfkDGjdjZDQgVwgQXfzSGuX5N4ZUYFOjvvwo_lU',
    };

    axios
      .get('/api/users/me', {
        headers,
      })
      .then(response => {
        console.log('getirdi user');
        console.log(response);
      })
      .catch(error => {
        console.log('calismadi user me action');
        console.log(error.response);
        console.log(error);
      });
  };
};

export function signoutUser = () => {
  return dispatch => {
    dispatch({type: 'OUT_OF_USER'});
  };
};
