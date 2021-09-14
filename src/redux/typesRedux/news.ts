type sourceType = {
  name: string;
  url: string;
};
export type itemsNews = {
  title: string;
  description: string;
  content: string;
  url: string;
  image: string;
  publishedAt: string;
  source: sourceType;
};

export interface newsState {
  items: itemsNews[];
  itemsBusiness: itemsNews[];
  itemsTechnology: itemsNews[];
  isLoaded: boolean;
}

export enum newsActionsType {
  SET_NEWS = 'SET_NEWS',
  SET_LOADED = 'SET_LOADED',
  SET_BUSINESS_NEWS = 'SET_BUSINESS_NEWS',
  SET_TECHNOLOGY_NEWS = 'SET_TECHNOLOGY_NEWS',
  SET_NEWS_ERROR = 'SET_NEWS_ERROR',
}

interface setNewsItemsType {
  type: newsActionsType.SET_NEWS;
  payload: itemsNews[];
}

interface setNewsLoadedType {
  type: newsActionsType.SET_LOADED;
  payload: boolean;
}

interface setTechnologyNewsType {
  type: newsActionsType.SET_TECHNOLOGY_NEWS;
  payload: itemsNews[];
}

interface setBusinessNewsType {
  type: newsActionsType.SET_BUSINESS_NEWS;
  payload: itemsNews[];
}

interface setNewsErrorType {
  type: newsActionsType.SET_NEWS_ERROR;
  payload: string;
}

export type newsActions =
  | setNewsItemsType
  | setNewsLoadedType
  | setTechnologyNewsType
  | setBusinessNewsType
  | setNewsErrorType;
