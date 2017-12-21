import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import geod from './geod';

export default combineReducers({
  // state: (state = {}) => state,
  geod,
  router: routerReducer
});
