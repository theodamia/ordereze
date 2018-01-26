import { BrowserRouter as Router, Route, Switch, browserHistory } from 'react-router-dom';
import { Provider } from 'react-redux';
import React from 'react';

import store from './store/index';
import App from './pages/App';
import Main from './pages/Main';
import PageList from './pages/PageList';

ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <App>
        <Switch>
          <Route exact path="/public" component={Main} />
          <Route path="/PageList" component={PageList} />
        </Switch>
      </App>
    </Router>
  </Provider>
), document.getElementById('content'));
