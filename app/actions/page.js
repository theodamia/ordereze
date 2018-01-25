import * as types from '../constants/index';

export function storePageRequest(data) {
  return {
    type: types.STORE_PAGE,
    payload: data,
  };
}

export function storePage(page) {
  console.log(page);
  return (dispatch) => {
    axios.post('http://pagesmanagement.azurewebsites.net/api/ResponsivePages',
      {
        title: page.title,
        description: page.description,
        type: page.type,
        isActive: page.isActive,
        publishedOn: page.publishedOn,
      })
      .then((response) => {
        dispatch(storePageRequest(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function updatePage(page) {
  return (dispatch) => {
    axios.put(`http://pagesmanagement.azurewebsites.net/api/ResponsivePages/${page.id}`, _.omit(page))
      .then(() => {
        dispatch(storePageRequest(page));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function fetchAllPagesRequest(data) {
  return {
    type: types.FETCH_ALL_PAGES,
    payload: data,
  };
}

export function fetchAllPages() {
  return (dispatch) => {
    axios.get('http://pagesmanagement.azurewebsites.net/api/ResponsivePages')
      .then((response) => {
        dispatch(fetchAllPagesRequest(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function deletePageRequest(pageID) {
  return {
    type: types.DELETE_PAGE,
    payload: pageID,
  };
}

export function deletePage(pageID) {
  return (dispatch) => {
    axios.delete(`http://pagesmanagement.azurewebsites.net/api/ResponsivePages/${pageID}`)
      .then((response) => {
        dispatch(deletePageRequest(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
