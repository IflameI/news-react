import React from 'react';
import { BusinessColumn } from '..';

const BusinessPosts = ({ items, isLoaded }) => {
  return (
    <section className='business'>
      <div className='container'>
        <div className='business__content'>
          <h3 className='business__name'>News about Business</h3>
          <div className='business__row'>
            {isLoaded
              ? items
                  .slice(0, 3)
                  .map((obj, index) => (
                    <BusinessColumn key={`${obj.source.name}_${index}`} {...obj} />
                  ))
              : 1231}
            {isLoaded
              ? items
                  .slice(4, 6)
                  .map((obj, index) => (
                    <BusinessColumn key={`${obj.source.name}_${index}`} {...obj} />
                  ))
              : 1231}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessPosts;
