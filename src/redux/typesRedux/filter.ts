export type countryType = {
  type: string;
};

export interface filterState {
  country: countryType;
}

export enum filterActionsType {
  SET_COUNTRY = 'SET_COUNTRY',
}

interface setFilterCountryType {
  type: filterActionsType.SET_COUNTRY;
  payload: countryType;
}

export type filterActions = setFilterCountryType;
