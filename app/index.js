import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/index'

import App from './pages/App'
import Main from './pages/Main'

ReactDOM.render((
  <Provider store={store}>
    <Router>
      <Route past="/" component={App} />
    </Router>
  </Provider>
), document.getElementById('content'))
