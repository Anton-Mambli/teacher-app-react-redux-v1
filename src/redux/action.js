import {
  ADD_PUPIL,
  SHOW_ALERT,
  HIDE_ALERT,
  COMPUTE,
  SEND_EFFICIENCY
} from "./types";

export const addPupil = pupil => {
  return {
    type: ADD_PUPIL,
    payload: pupil
  };
};
export const sendEfficiency = payload => {
  return {
    type: SEND_EFFICIENCY,
    payload: payload
  };
};
export function showAlert(text) {
  return dispatch => {
    dispatch({
      type: SHOW_ALERT
    });

    setTimeout(() => {
      dispatch(hideAlert());
    }, 3000);
  };
}

export function hideAlert() {
  return {
    type: HIDE_ALERT
  };
}

export function compute() {
  return {
    type: COMPUTE
  };
}
