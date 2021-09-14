import axios from 'axios';

import { Dispatch } from 'redux';

import { itemsNews, newsActions, newsActionsType } from '../typesRedux/news';

export const setNews = (payload: itemsNews[]): newsActions => {
  return { type: newsActionsType.SET_NEWS, payload };
};

export const setBusinessNews = (payload: itemsNews[]): newsActions => {
  return { type: newsActionsType.SET_BUSINESS_NEWS, payload };
};

export const setTechnologyNews = (payload: itemsNews[]): newsActions => {
  return { type: newsActionsType.SET_TECHNOLOGY_NEWS, payload };
};

export const fetchNews = (country: string) => {
  return async (dispatch: Dispatch<newsActions>) => {
    try {
      const response = await axios.get(
        `https://gnews.io/api/v4/top-headlines?country=${country}&token=1e11b6d751fc5677778914fd3989a5c3`,
      );
      dispatch({ type: newsActionsType.SET_NEWS, payload: response.data.articles });
    } catch (e) {
      dispatch({
        type: newsActionsType.SET_NEWS_ERROR,
        payload: 'Произошла ошибка при загрузке новостей',
      });
    }
  };
};

export const fetchBusinessNews = (country: string) => {
  return async (dispatch: Dispatch<newsActions>) => {
    try {
      const response = await axios.get(
        `https://gnews.io/api/v4/search?country=${country}&q=business&token=1e11b6d751fc5677778914fd3989a5c3`,
      );
      dispatch({ type: newsActionsType.SET_BUSINESS_NEWS, payload: response.data.articles });
    } catch (e) {
      dispatch({
        type: newsActionsType.SET_NEWS_ERROR,
        payload: 'Произошла ошибка при загрузке новостей',
      });
    }
  };
};

export const fetchTechnologyNews = (country: string) => {
  return async (dispatch: Dispatch<newsActions>) => {
    try {
      const response = await axios.get(
        `https://gnews.io/api/v4/search?country=${country}&q=science&token=1e11b6d751fc5677778914fd3989a5c3`,
      );
      dispatch({ type: newsActionsType.SET_TECHNOLOGY_NEWS, payload: response.data.articles });
    } catch (e) {
      dispatch({
        type: newsActionsType.SET_NEWS_ERROR,
        payload: 'Произошла ошибка при загрузке новостей',
      });
    }
  };
};
