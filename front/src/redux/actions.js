import {
  ADD_FAVORITES,
  DELETE_FAVORITES,
  FILTER,
  ORDER,
  RESET,
} from "./action_type";
import axios from "axios";

export function addFavorites(ch) {
  return async function (dispatch) {
    try {
      const character = await axios.post(`http://localhost:3001/rickandmorty/fav`, ch);
      dispatch({
        type: ADD_FAVORITES,
        payload: character.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function deleteFavorites(id) {
  return async function (dispatch) {
    try {
      const chDetail = await axios.delete(
        `http://localhost:3001/rickandmorty/fav/${id}`
      );
      dispatch({
        type: DELETE_FAVORITES,
        payload: id,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function filterCards(status) {
  return {
    type: FILTER,
    payload: status,
  };
}
export function orderCards(order) {
  return {
    type: ORDER,
    payload: order,
  };
}

export function reset() {
  return {
    type: RESET,
  };
}

/*
  Crear una action-creator con el nombre "filterCards". Esta action-creator recibirá por parámetro un status. 
  La action que retornará tendrá un type llamado "FILTER", y dentro del payload irá el género recibido.

Crear una action-creator con el nombre "orderCards". Esta action-creator recibirá por parámetro un id. 
La action que retornará tendrá un type llamado "ORDER", y dentro del payload irá el id recibido.
  */
