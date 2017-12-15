import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import items from './items';
import geod from './geod';

export default combineReducers({
  // state: (state = {}) => state,
  items,
  geod,
  router: routerReducer
});
