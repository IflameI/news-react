import React from 'react';

const BusinessColumn = ({ title, source, description, publishedAt, urlToImage, url }) => {
  return (
    <div className='business__column'>
      <div className='business__item'>
        <a className='business__wrapper' href={url}>
          <div className='business__image'>
            <img
              src={
                urlToImage ||
                'https://i.pinimg.com/600x315/ed/7b/4b/ed7b4ba9e8d9549c7354556e72eda013.jpg'
              }></img>
          </div>
          <div className='business__text'>
            <div className='business__top'>
              <div className='business__title'>{title}</div>
              <div className='business__site'>{source.name}</div>
              <p className='business__description'>{description}</p>
            </div>
            <div className='business__bottom'>
              <div className='business__date'>{publishedAt}</div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default BusinessColumn;
