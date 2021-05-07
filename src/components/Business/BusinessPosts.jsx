import React from 'react';
import { BusinessColumn, BusinessLoader } from '..';
import PropTypes from 'prop-types';

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
              : Array(3)
                  .fill(0)
                  .map((_, index) => <BusinessLoader key={index} />)}
            {isLoaded
              ? items
                  .slice(4, 6)
                  .map((obj, index) => (
                    <BusinessColumn key={`${obj.source.name}_${index}`} {...obj} />
                  ))
              : Array(3)
                  .fill(0)
                  .map((_, index) => <BusinessLoader key={index} />)}
          </div>
        </div>
      </div>
    </section>
  );
};

BusinessPosts.propTypes = {
  items: PropTypes.array.isRequired,
  isLoaded: PropTypes.bool,
};

export default BusinessPosts;
