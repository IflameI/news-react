const initialState = {
  country: {
    type: 'us',
  },
};

const filters = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_COUNTRY':
      return {
        ...state,
        country: action.payload,
      };

    default:
      return state;
  }
};
export default filters;
