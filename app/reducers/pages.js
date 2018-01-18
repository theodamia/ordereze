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
    case types.FETCH_ALL_PAGES:
      return {
        collection: _.keyBy(action.payload, '_id')
      };
    default:
      return state;
  }
};

export default page;
