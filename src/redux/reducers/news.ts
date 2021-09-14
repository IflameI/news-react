import { newsActions, newsActionsType, newsState } from '../typesRedux/news';

const initialState: newsState = {
  items: [],
  itemsBusiness: [],
  itemsTechnology: [],
  isLoaded: false,
};

export const news = (state = initialState, action: newsActions): newsState => {
  switch (action.type) {
    case newsActionsType.SET_NEWS:
      return { ...state, items: action.payload, isLoaded: true };
    case newsActionsType.SET_BUSINESS_NEWS:
      return { ...state, itemsBusiness: action.payload, isLoaded: true };
    case newsActionsType.SET_TECHNOLOGY_NEWS:
      return { ...state, itemsTechnology: action.payload, isLoaded: true };
    case newsActionsType.SET_LOADED:
      return { ...state, isLoaded: action.payload };

    default:
      return state;
  }
};
