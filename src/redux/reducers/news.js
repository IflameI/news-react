const initialState = {
  items: [],
  itemsBusiness: [],
  itemsTechnology: [],

  isLoaded: false,
};

const news = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NEWS':
      return {
        ...state,
        items: action.payload,
        isLoaded: true,
      };
    case 'SET_LOADED':
      return {
        ...state,
        isLoaded: action.payload,
      };
    case 'SET_BUSINESS_NEWS':
      return {
        ...state,
        itemsBusiness: action.payload,
        isLoaded: true,
      };
    case 'SET_TECHNOLOGY_NEWS':
      return {
        ...state,
        itemsTechnology: action.payload,
        isLoaded: true,
      };
    default:
      return state;
  }
};

export default news;
