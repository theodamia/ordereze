import * as types from '../constants/index'

export function storePageRequest(data) {
  return {
    type: types.STORE_PAGE,
    payload: data
  };
}

export function storePage(page) {
  return dispatch => {
    axios.post('http://pagesmanagement.azurewebsites.net/Help/Api/POST-api-ResponsivePages',
      { Title: page.title, Description: page.description, PublishedOn: page.publishedOn, isActive: page.active, Type: page.type })
    .then(response => {
       dispatch(storePageRequest(response.data));
       console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}
