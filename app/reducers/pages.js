import * as types from '../constants/index.js'

const initialState = {
  collection: {}
};

const page = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case types.STORE_PAGE:
      return {
        collection: {
          ...state.collection,
          [action.payload.id]: action.payload
        }
      };
    default:
      return state;
  }
};

export default page;
