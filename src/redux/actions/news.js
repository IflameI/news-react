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
  const response = await axios.get(
    `https://newsapi.org/v2/top-headlines?country=${country}&category=technology&apiKey=e5c3da6204a14b828420939ff5ed03cb`,
  );

  return dispatch(setNews(response.data.articles));
};

export const fetchBusinessNews = (country) => async (dispatch) => {
  const response = await axios.get(
    `https://newsapi.org/v2/top-headlines?country=${country}&category=business&apiKey=e5c3da6204a14b828420939ff5ed03cb`,
  );

  return dispatch(setBusinessNews(response.data.articles));
};

export const fetchTechnologyNews = (country) => async (dispatch) => {
  const response = await axios.get(
    `https://newsapi.org/v2/top-headlines?country=${country}&category=science&apiKey=e5c3da6204a14b828420939ff5ed03cb`,
  );

  return dispatch(setTechnologyNews(response.data.articles));
};
