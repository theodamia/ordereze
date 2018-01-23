import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import React from 'react';

import store from './store/index';
import App from './pages/App';
import Main from './pages/Main';

ReactDOM.render((
  <Provider store={store}>
    <Router>
      <App>
        <Switch>
          <Route past="/" component={Main} />
        </Switch>
      </App>
    </Router>
  </Provider>
), document.getElementById('content'));
