import { useEffect, useCallback } from 'react';

import { Header, MainContent, BusinessPosts, GeeksPosts } from './components';
import { useActions } from './redux/typeHooks/useActions';
import { useTypedSelector } from './redux/typeHooks/useTypedSelector';

export type countryListType = {
  name: string;
  type: string;
};
const countryList: countryListType[] = [
  { name: 'English', type: 'us' },
  { name: 'Russia', type: 'ru' },
  { name: 'Italy', type: 'it' },
  { name: 'Ukraine', type: 'ua' },
  { name: 'France', type: 'fr' },
  { name: 'Germany', type: 'de' },
];

const App: React.FC = () => {
  const { setCountry, fetchNews, fetchBusinessNews, fetchTechnologyNews } = useActions();
  const { isLoaded, itemsTechnology, itemsBusiness } = useTypedSelector((state) => state.news);
  const { country } = useTypedSelector((state) => state.filters);

  const onSelectCountryType = useCallback((type) => {
    setCountry(type);
  }, []);

  useEffect(() => {
    fetchNews(country.type);
    fetchBusinessNews(country.type);
    fetchTechnologyNews(country.type);
  }, [country]);
  return (
    <div className='wrapper'>
      <Header
        activeCountry={country.type}
        items={countryList}
        onClickCountry={onSelectCountryType}
      />
      <MainContent />
      <BusinessPosts isLoaded={isLoaded} items={itemsBusiness} />
      <GeeksPosts isLoaded={isLoaded} items={itemsTechnology} />
    </div>
  );
};

export default App;
