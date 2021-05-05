import React from 'react';
import { MainContentBigColumn, Stories, MainContentColumn } from '../../components';
const MainContent = ({ items, isLoaded }) => {
  return (
    <>
      <section className='main-content'>
        <div className='container'>
          <h1 className='main-content__title'>Top technology headlines in the US right now</h1>
          <div className='main-content__row'>
            {isLoaded
              ? items
                  .slice(0, 3)
                  .map((obj, index) => (
                    <MainContentColumn key={`${obj.source.name}_${index}`} {...obj} />
                  ))
              : 1231}
            {isLoaded
              ? items
                  .slice(4, 6)
                  .map((obj, index) => (
                    <MainContentBigColumn key={`${obj.source.name}_${index}`} {...obj} />
                  ))
              : 1231}
          </div>
        </div>
      </section>
      <Stories />
    </>
  );
};

export default MainContent;
