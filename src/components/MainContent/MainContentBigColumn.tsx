type sourceType = {
  name: string;
  url: string;
};

interface IMainContentBigColumn {
  title: string;
  description: string;
  source: sourceType;
  publishedAt: string;
  image: string;
  url: string;
}

const MainContentBigColumn: React.FC<IMainContentBigColumn> = ({
  title,
  description,
  source,
  publishedAt,
  image,
  url,
}) => {
  return (
    <div className='main-content__big-wrapper'>
      <div className='main-content__column'>
        <div className='main-content__item item-main-content'>
          <a className='item-main-content__wrapper' href={url}>
            <div className='item-main-content__image'>
              <img
                src={
                  image ||
                  'https://i.pinimg.com/600x315/ed/7b/4b/ed7b4ba9e8d9549c7354556e72eda013.jpg'
                }
                alt='news-image'></img>
            </div>
            <div className='item-main-content__top'>
              <div className='item-main-content__title'>{title}</div>
              <div className='item-main-content__site'>{source.name}</div>
              <p className='item-main-content__description'>{description}</p>
            </div>
            <div className='item-main-content__bottom'>
              <div className='item-main-content__date'>{publishedAt.slice(0, 10)}</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MainContentBigColumn;
