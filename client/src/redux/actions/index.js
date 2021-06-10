import {
    GET_PROFILE,
    GET_PROFILE_FAIL,
    GET_PROFILE_SUCCESS,
    LOGIN,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    REGISTER_FAIL,
    REGISTER_SUCCESS,
    REGISTER_USER,
  } from "../actionTypes";
  import axios from "axios";
  export const register = (newUser) => async (dispatch) => {
    dispatch({
      type: REGISTER_USER,
    });
    try {
      const registerRes = await axios.post("/user/register", newUser);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: registerRes,
      });
    } catch (error) {
      dispatch({
        type: REGISTER_FAIL,
        payload: error.response.data,
      });
    }
  };
  
  export const login = (user) => async (dispatch) => {
    dispatch({
      type: LOGIN,
    });
    try {
      const loginRes = await axios.post("/user/login", user);
      localStorage.setItem("token", loginRes.data.token);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: loginRes.data,
      });
    } catch (error) {
      dispatch({
        type: LOGIN_FAIL,
        payload: error.response.data,
      });
    }
  };
  
  export const getProfile = () => async (dispatch) => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: token,
      },
    };
    dispatch({
      type: GET_PROFILE,
    });
    try {
      const isAuth = await axios.get("/user/auth", config);
      dispatch({
        type: GET_PROFILE_SUCCESS,
        payload: isAuth.data,
      });
    } catch (error) {
      dispatch({
        type: GET_PROFILE_FAIL,
        payload: error.response.data,
      });
    }
  };