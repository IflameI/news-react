import React from 'react';
import {
  LoaderBlock,
  BigLoaderBlock,
  MainContentBigColumn,
  MainContentColumn,
} from '../../components';
import PropTypes from 'prop-types';

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
              : Array(2)
                  .fill(0)
                  .map((_, index) => <BigLoaderBlock key={index} />)}
            {isLoaded
              ? items
                  .slice(2, 5)
                  .map((obj, index) => (
                    <MainContentColumn key={`${obj.source.name}_${index}`} {...obj} />
                  ))
              : Array(3)
                  .fill(0)
                  .map((_, index) => <LoaderBlock key={index} />)}
          </div>
        </div>
      </div>
    </section>
  );
};
GeeksPosts.propTypes = {
  items: PropTypes.array.isRequired,
  isLoaded: PropTypes.bool,
};

export default GeeksPosts;
