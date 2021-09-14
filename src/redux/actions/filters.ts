import { countryType, filterActions, filterActionsType } from '../typesRedux/filter';

export const setCountry = ({ type }: countryType): filterActions => {
  return { type: filterActionsType.SET_COUNTRY, payload: { type } };
};
