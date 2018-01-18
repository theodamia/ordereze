import * as types from '../constants/index'

export function storePageRequest(data) {
  return {
    type: types.STORE_PAGE,
    payload: data
  };
}

export function storePage(page) {
  return dispatch => {
    axios.post('http://pagesmanagement.azurewebsites.net/api/ResponsivePages',
      { title: page.title, description: page.description, type: page.type, isActive: page.active, publishedOn: page.publishedOn })
    .then(response => {
       dispatch(storePageRequest(response.data));
       console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}

export function fetchAllPagesRequest(data) {
  return {
    type: types.FETCH_ALL_PAGES,
    payload: data
  };
}

export function fetchAllPages() {
  return dispatch => {
     axios.get('http://pagesmanagement.azurewebsites.net/api/ResponsivePages')
    .then(response => {
      dispatch(fetchAllPagesRequest(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
  }
}
