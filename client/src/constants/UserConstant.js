export const USER_LOGIN_REQUEST = 'USER_SIGNIN_REQUEST';
export const USER_LOGIN_SUCCESS = 'USER_SIGNIN_SUCCESS';
export const USER_LOGIN_FAIL = 'USER_SIGNIN_FAIL';
export const BASE_URL = process.env.REACT_APP_API_URL || process.env.NODE_ENV === 'production' 
  ? "https://tpnk-server.onrender.com" 
  : "http://localhost:4000";
