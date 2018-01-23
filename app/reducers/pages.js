import * as types from '../constants/index';

const initialState = {
  collection: {},
};

const page = (state = initialState,
  action) => {
  switch (action.type) {
    case types.STORE_PAGE:
      console.log(action.payload);
      return {
        collection: {
          ...state.collection,
          [action.payload.id]: action.payload,
        },
      };
    case types.FETCH_ALL_PAGES:
      return {
        collection: _.keyBy(action.payload, 'id'),
      };
    case types.DELETE_PAGE:
      return {
        collection: _.omit(state.collection, action.payload.id),
      };
    default:
      return state;
  }
};

export default page;
