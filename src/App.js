import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { Header, MainContent, BusinessPosts, GeeksPosts } from './components';
import { setCountry } from './redux/actions/filters';
import { fetchNews } from './redux/actions/news';
import { fetchBusinessNews } from './redux/actions/news';
import { fetchTechnologyNews } from './redux/actions/news';

const countryList = [
  { name: 'English', type: 'us' },
  { name: 'Russia', type: 'ru' },
  { name: 'Italy', type: 'it' },
  { name: 'Ukraine', type: 'ua' },
  { name: 'France', type: 'fr' },
  { name: 'Germany', type: 'de' },
];

function App() {
  const dispatch = useDispatch();

  const { isLoaded, items, country, itemsBusiness, itemsTechnology } = useSelector(
    ({ news, filters }) => {
      return {
        items: news.items,
        itemsBusiness: news.itemsBusiness,
        itemsTechnology: news.itemsTechnology,

        isLoaded: news.isLoaded,
        country: filters.country,
      };
    },
  );

  const onSelectCountryType = React.useCallback((type) => {
    dispatch(setCountry(type));
  }, []);

  useEffect(() => {
    dispatch(fetchNews(country.type));
    dispatch(fetchBusinessNews(country.type));
    dispatch(fetchTechnologyNews(country.type));
  }, [country]);
  return (
    <div className='wrapper'>
      <Header
        activeCountry={country.type}
        items={countryList}
        onClickCountry={onSelectCountryType}
      />
      <MainContent isLoaded={isLoaded} items={items} />
      <BusinessPosts isLoaded={isLoaded} items={itemsBusiness} />
      <GeeksPosts isLoaded={isLoaded} items={itemsTechnology} />
    </div>
  );
}

export default App;
