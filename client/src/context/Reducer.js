import * as constants from "./constants";
const Reducer = (state, action) => {
  switch (action.type) {
    case constants.LOGIN_START:
      return {
        user: null,
        isFetching: true,
        error: false,
      };
    case constants.LOGIN_SUCCESS:
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      };
    case constants.LOGIN_FAILURE:
      return {
        user: null,
        isFetching: false,
        error: true,
      };
    case constants.LOG_OUT:
      return {
        user: null,
        isFetching: false,
        error: false,
      };
    case constants.UPDATE_START:
      return {
        ...state,
        isFetching: true,
      };
    case constants.UPDATE_SUCCESS:
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      };
    case constants.UPDATE_FAILURE:
      return {
        user: state.user,
        isFetching: false,
        error: true,
      };
    default:
      return state;
  }
};
export default Reducer;
