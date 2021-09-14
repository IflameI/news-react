import { filterActions, filterActionsType, filterState } from '../typesRedux/filter';

const initialState: filterState = {
  country: {
    type: 'us',
  },
};

export const filters = (state = initialState, action: filterActions): filterState => {
  switch (action.type) {
    case filterActionsType.SET_COUNTRY:
      return { ...state, country: action.payload };
    default:
      return state;
  }
};
