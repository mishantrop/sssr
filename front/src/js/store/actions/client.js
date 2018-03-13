// import axios from 'axios'
// import qs from 'qs'
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
  const client = null;

  return dispatch({
    type: CLIENT_FAIL,
    data: client,
  });
}

export const fetchClient = () => {
  // return (dispatch) => {
  //   if (Math.random() > 0.5 || 1 === 1) {
  //     dispatch(clientSuccess(data));
  //   } else {
  //     dispatch(clientFailed(data));
  //   }
  // }

  const client = {
    name: 'Vasya',
  };

  return {
		type: CLIENT_SUCCESS,
		data: client,
	};
}

export default {
  fetchClient,
}
