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
  
  const init = {
    loading: false,
    user: null,
    errors: null,
  };
  
  const reducer = (state = init, { type, payload }) => {
    switch (type) {
      case REGISTER_USER:
        return { ...state, loading: true };
      case REGISTER_SUCCESS:
        return { ...state, loading: false, user: payload };
      case REGISTER_FAIL:
        return { ...state, loading: false, errors: payload };
      case LOGIN:
        return {
          ...state,
          loading: true,
        };
      case LOGIN_FAIL:
        return {
          ...state,
          loading: false,
          errors: payload,
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          loading: false,
          token: payload,
        };
      case GET_PROFILE:
        return {
          ...state,
          loading: true,
        };
      case GET_PROFILE_FAIL:
        return {
          ...state,
          loading: false,
          errors: payload,
        };
      case GET_PROFILE_SUCCESS:
        return {
          ...state,
          loading: false,
          isAuth: payload,
          user: payload,
        };
      default:
        return state;
    }
  };
  
  export default reducer;