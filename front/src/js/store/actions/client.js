// import axios from 'axios'
// import qs from 'qs'
// import { store } from '../index'
import console from 'console';
import {
  CLIENT_FAIL,
  CLIENT_SUCCESS,
} from '../types'

export const clientSuccess = data => dispatch => {
  const client = {
    name: 'Vasya',
  };

  return dispatch({
    type: CLIENT_SUCCESS,
    data: client,
  });
}

/**
 * Может вызваться, когда клиент обновляет страницу кабинета, но авторизация уже всё.
 */
export const clientFailed = (data) => dispatch => {
  const client = null

  return dispatch({
    type: CLIENT_FAIL,
    data: client,
  });
}

export const fetchClient = () => {
  console.log('fetchClient');
  if (Math.random() > 0.5 || 1 === 1) {
    dispatch(clientSuccess(data));
  } else {
    dispatch(clientFailed(data));
  }
  return result.data;
}

export default {
  fetchClient,
}
