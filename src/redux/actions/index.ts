import * as newsActionCreators from './news';
import * as filtersActionCreators from './filters';

export default {
  ...newsActionCreators,
  ...filtersActionCreators,
};
