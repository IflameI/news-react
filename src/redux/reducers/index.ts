import { news } from './news';
import { filters } from './filters';

import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  news,
  filters,
});

export type RootState = ReturnType<typeof rootReducer>;
