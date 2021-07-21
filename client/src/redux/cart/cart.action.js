/** @format */

import axios from "axios";
import apiUrl from "../../apiUrl/api";
let backendUrl = apiUrl();

export const AddtoCart = (item) => async (dispatch) => {
  try {
    const { data } = await axios.patch(`${backendUrl}/api/user/cart `, item);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
