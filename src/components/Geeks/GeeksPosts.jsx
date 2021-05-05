import React from 'react';
import { MainContentBigColumn, MainContentColumn } from '../../components';

const GeeksPosts = ({ items, isLoaded }) => {
  return (
    <section className='geeks'>
      <div className='container'>
        <div className='geeks__title'>Top headlines from science world</div>
        <div className='geeks__content'>
          <div className='geeks__row'>
            {isLoaded
              ? items
                  .slice(0, 2)
                  .map((obj, index) => (
                    <MainContentBigColumn key={`${obj.source.name}_${index}`} {...obj} />
                  ))
              : 1231}
            {isLoaded
              ? items
                  .slice(2, 5)
                  .map((obj, index) => (
                    <MainContentColumn key={`${obj.source.name}_${index}`} {...obj} />
                  ))
              : 1231}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeeksPosts;
