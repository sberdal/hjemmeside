import jwt_decode from 'jwt-decode';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';
export const TOKEN_ACQUIRED = 'TOKEN_ACQUIRED';


export function loginRequest() {
  return {
    type: LOGIN_REQUEST,
  }
}

export function loginSuccess(user, authenticationResult) {


  let decodedToken = jwt_decode(authenticationResult.accessToken);

  return {
    type: LOGIN_SUCCESS,
    user: user,
    accessToken: authenticationResult.accessToken,
    expiresAt: decodedToken.exp,
    validFrom: decodedToken.iat
  }
}

export function loginFailed(errorDetails) {
  return {
    type: LOGIN_FAILURE,
    errorDetails
  }
}

export function logoutRequest() {
  return {
    type: LOGOUT_REQUEST,
  }
}

export function logoutSuccess() {
  return {
    type: LOGOUT_SUCCESS,
  }
}

export function logoutFailed(errorDetails) {
  return {
    type: LOGOUT_FAILURE,
    errorDetails,
  }
}

export function tokenAcquired(authenticationResult) {

  let decodedToken = jwt_decode(authenticationResult.accessToken);

  return {
    type: TOKEN_ACQUIRED,
    accessToken: authenticationResult.accessToken,
    expiresAt: decodedToken.exp,
    validFrom: decodedToken.iat
  }
}
