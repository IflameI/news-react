import axios from 'axios';

export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload,
});

export const setNews = (items) => ({
  type: 'SET_NEWS',
  payload: items,
});

export const setBusinessNews = (items) => ({
  type: 'SET_BUSINESS_NEWS',
  payload: items,
});

export const setTechnologyNews = (items) => ({
  type: 'SET_TECHNOLOGY_NEWS',
  payload: items,
});

export const fetchNews = (country) => async (dispatch) => {
  dispatch({
    type: 'SET_LOADED',
    payload: false,
  });
  const response = await axios.get(
    `https://gnews.io/api/v4/top-headlines?country=${country}&token=1e11b6d751fc5677778914fd3989a5c3`,
  );

  return dispatch(setNews(response.data.articles));
};

export const fetchBusinessNews = (country) => async (dispatch) => {
  dispatch({
    type: 'SET_LOADED',
    payload: false,
  });
  const response = await axios.get(
    `https://gnews.io/api/v4/search?country=${country}&q=business&token=1e11b6d751fc5677778914fd3989a5c3`,
  );

  return dispatch(setBusinessNews(response.data.articles));
};

export const fetchTechnologyNews = (country) => async (dispatch) => {
  dispatch({
    type: 'SET_LOADED',
    payload: false,
  });
  const response = await axios.get(
    `https://gnews.io/api/v4/search?country=${country}&q=science&token=1e11b6d751fc5677778914fd3989a5c3`,
  );

  return dispatch(setTechnologyNews(response.data.articles));
};
