import * as Type from "./type";

const initialState = {
  token: null,
  profile: null,
};

const reducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case Type.SET_PROFILE:
      return { ...state, profile: payload };

    case Type.GET_PROFILE:
      return { ...state, mission_data: payload };

    default:
      return state;
  }
};

export default reducer;
export * from "./type";
