import * as constants from "./constants";
export const loginStart = () => {
  return {
    type: constants.LOGIN_START,
  };
};
export const loginSuccess = (user) => {
  return {
    type: constants.LOGIN_SUCCESS,
    payload: user,
  };
};
export const loginFailure = () => {
  return {
    type: constants.LOGIN_FAILURE,
  };
};
export const logout = () => {
  return {
    type: constants.LOG_OUT,
  };
};

export const updateStart = () => {
  return {
    type: constants.UPDATE_START,
  };
};
export const updateSuccess = (user) => {
  return {
    type: constants.UPDATE_SUCCESS,
    payload: user,
  };
};
export const updateFailure = () => {
  return {
    type: constants.UPDATE_FAILURE,
  };
};