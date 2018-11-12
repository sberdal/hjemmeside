import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  TOKEN_ACQUIRED,
} from './actions'


export function authReducer(state = {
  isFetching: false,
  isAuthenticated: false,
}, action) {


  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        isFetching: true,
        isAuthenticated: false,
      };
    case LOGIN_SUCCESS:
      return {
        isFetching: false,
        isAuthenticated: true,
        accessToken: action.accessToken,
        expiresAt: action.expiresAt,
        validFrom: action.validFrom,
        user: action.user
      };
    case LOGIN_FAILURE:
      return {
        isFetching: false,
        isAuthenticated: false,
        errorDetails: action.errorDetails
      };
    case LOGOUT_REQUEST: {
      return {
        ...state,
        isFetching: true,
      }
    }
    case LOGOUT_SUCCESS:
      return {
        isFetching: false,
        isAuthenticated: false
      };
    case LOGOUT_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorDetails: action.errorDetails
      };
    case TOKEN_ACQUIRED: {
      return {
        ...state,
        isFetching: false,
        isAuthenticated: true,
        accessToken: action.accessToken,
        validFrom: action.validFrom,
        expiresAt: action.expiresAt,
      }
    }

    default:
      return state
  }
}
