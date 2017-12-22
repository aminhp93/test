import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import geod from './geod';
import todos from './todos';
import visibilityFilter from './visibilityFilter';

export default combineReducers({
  // state: (state = {}) => state,
  geod,
  visibilityFilter,
  todos,
  router: routerReducer
});
