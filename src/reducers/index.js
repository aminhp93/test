import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import geod from './geod';
import todos from './todos';

export default combineReducers({
  // state: (state = {}) => state,
  geod,
  todos,
  router: routerReducer
});
