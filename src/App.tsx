import { useEffect, useCallback } from 'react';
import { Route, Switch } from 'react-router';

import { Header, MainContent, BusinessPosts, GeeksPosts, MyList } from './components';
import { useActions } from './redux/typeHooks/useActions';
import { useTypedSelector } from './redux/typeHooks/useTypedSelector';

const App: React.FC = () => {
  const { setCountry, fetchNews, fetchBusinessNews, fetchTechnologyNews } = useActions();
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
      <Header activeCountry={country.type} onClickCountry={onSelectCountryType} />
      <Switch>
        <Route exact path='/'>
          <MainContent />
          <BusinessPosts />
          <GeeksPosts />
        </Route>
        <Route exact path='/MyList'>
          <MyList />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
