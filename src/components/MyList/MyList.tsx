let grabity = require('grabity');

const MyList = () => {
  (async () => {
    let it = await grabity.grabIt('https://github.com/e-oj/grabity');

    console.log(it);
  })();
  return (
    <section className='myList'>
      <div className='container'>
        <div className='myList__content'>
          <div className='myList__title'>My List</div>
          <div className='myList__row'>
            <div className='myList__column'>
              <div className='myList__item'>
                <div className='myList__img'>
                  <img
                    src='https://pocket-image-cache.com/600x400/filters:format(jpg):extract_focal()/https%3A%2F%2Frepository-images.githubusercontent.com%2F390801679%2F8b55aeb0-1132-460b-8361-f5eede80f759'
                    alt='#'
                  />
                </div>
                <div className='myList__suptitle'>README Gen</div>
                <div className='myList__author'>Github</div>
              </div>
            </div>
            <div className='myList__column'>
              <div className='myList__item'>
                <div className='myList__img'>
                  <img
                    src='https://pocket-image-cache.com/600x400/filters:format(jpg):extract_focal()/https%3A%2F%2Frepository-images.githubusercontent.com%2F390801679%2F8b55aeb0-1132-460b-8361-f5eede80f759'
                    alt='#'
                  />
                </div>
                <div className='myList__suptitle'>README Gen</div>
                <div className='myList__author'>Github</div>
              </div>
            </div>
            <div className='myList__column'>
              <div className='myList__item'>
                <div className='myList__img'>
                  <img
                    src='https://pocket-image-cache.com/600x400/filters:format(jpg):extract_focal()/https%3A%2F%2Frepository-images.githubusercontent.com%2F390801679%2F8b55aeb0-1132-460b-8361-f5eede80f759'
                    alt='#'
                  />
                </div>
                <div className='myList__suptitle'>README Gen</div>
                <div className='myList__author'>Github</div>
              </div>
            </div>
            <div className='myList__column'>
              <div className='myList__item'>
                <div className='myList__img'>
                  <img
                    src='https://pocket-image-cache.com/600x400/filters:format(jpg):extract_focal()/https%3A%2F%2Frepository-images.githubusercontent.com%2F390801679%2F8b55aeb0-1132-460b-8361-f5eede80f759'
                    alt='#'
                  />
                </div>
                <div className='myList__suptitle'>README Gen</div>
                <div className='myList__author'>Github</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyList;
