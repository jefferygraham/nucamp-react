import * as ActionTypes from './ActionTypes';

export const Campsites = (
  state = {
    isLoading: true,
    errMsg: null,
    campsites: [],
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_CAMPSITES:
      return {
        ...state,
        isLoading: false,
        errMsg: null,
        campsites: action.payload,
      };
    case ActionTypes.CAMPSITES_LOADING:
      return { ...state, isLoading: true, errMsg: null, campsites: [] };
    case ActionTypes.CAMPSITES_FAILED:
      return { ...state, isLoading: false, errMsg: action.payload };
    default:
      return state;
  }
};
