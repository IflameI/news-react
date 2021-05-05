import news from './news';
import filters from './filters';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  news,
  filters,
});

export default rootReducer;
