import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import React from 'react';
import { store, history} from './store/index';
import registerServiceWorker from './registerServiceWorker';

import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import App from './components/App';
import Test from './components/Test';

ReactDOM.render((
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
      	<Route exact path="/" component={App} />
        <Route path="/test" component={Test} />
      </Switch>
    </ConnectedRouter>
  </Provider>

), document.getElementById('root'));
registerServiceWorker();
