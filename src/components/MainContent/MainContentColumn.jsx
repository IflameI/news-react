import React from 'react';
import PropTypes from 'prop-types';

const MainContentColumn = ({ title, source, publishedAt, image, url }) => {
  return (
    <div className='main-content__column'>
      <div className='main-content__item item-main-content'>
        <a className='item-main-content__wrapper' href={url}>
          <div className='item-main-content__image'>
            <img
              src={
                image ||
                'https://i.pinimg.com/600x315/ed/7b/4b/ed7b4ba9e8d9549c7354556e72eda013.jpg'
              }></img>
          </div>
          <div className='item-main-content__top'>
            <div className='item-main-content__title'>{title}</div>
            <div className='item-main-content__site'>{source.name}</div>
          </div>
          <div className='item-main-content__bottom'>
            <div className='item-main-content__date'>{publishedAt.slice(0, 10)}</div>
          </div>
        </a>
      </div>
    </div>
  );
};

MainContentColumn.propTypes = {
  title: PropTypes.string.isRequired,
  source: PropTypes.obj,
  publishedAt: PropTypes.number,
  url: PropTypes.string,
};

export default MainContentColumn;
