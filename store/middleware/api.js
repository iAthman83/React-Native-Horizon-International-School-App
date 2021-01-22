import axios from "axios";
import * as actions from "../apiActions/api";

const api = ({ dispatch }) => (next) => async (action) => {
  // if it's not equalt to apiCallBegun pass it to the next middleware
  if (action.type !== actions.apiCallBegan.type) {
    // use return so that the rest of the function does not execute
    return next(action);
  }

  const { url, method, data, onStart, onSuccess, onError } = action.payload;

  if (onStart) {
    dispatch({ type: onStart });
  }
  next(action);

  try {
    const response = await axios.request({
      baseURL: "https://horizon-react-native-api.herokuapp.com",
      url,
      method,
      data,
    });
    // general success
    dispatch(actions.apiCallSuccess(response.data));
    if (onSuccess) {
      dispatch({ type: onSuccess, payload: response.data });
    }
  } catch (error) {
    // general error
    dispatch(actions.apiCallFailed(error.message));
    if (onError) {
      dispatch({ type: onError, payload: error.message });
    }
  }
};

export default api;
