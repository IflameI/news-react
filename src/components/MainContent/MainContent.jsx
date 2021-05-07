import React from 'react';
import {
  MainContentBigColumn,
  Stories,
  MainContentColumn,
  LoaderBlock,
  BigLoaderBlock,
} from '../../components';
import PropTypes from 'prop-types';

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
              : Array(3)
                  .fill(0)
                  .map((_, index) => <LoaderBlock key={index} />)}
            {isLoaded
              ? items
                  .slice(4, 6)
                  .map((obj, index) => (
                    <MainContentBigColumn key={`${obj.source.name}_${index}`} {...obj} />
                  ))
              : Array(2)
                  .fill(0)
                  .map((_, index) => <BigLoaderBlock key={index} />)}
          </div>
        </div>
      </section>
      <Stories />
    </>
  );
};

MainContent.propTypes = {
  items: PropTypes.array.isRequired,
  isLoaded: PropTypes.bool,
};

export default MainContent;
