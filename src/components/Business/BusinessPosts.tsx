import { BusinessColumn, BusinessLoader } from '..';
import { useTypedSelector } from '../../redux/typeHooks/useTypedSelector';

const BusinessPosts = () => {
  const { isLoaded, itemsBusiness } = useTypedSelector((state) => state.news);
  return (
    <section className='business'>
      <div className='container'>
        <div className='business__content'>
          <h3 className='business__name'>News about Business</h3>
          <div className='business__row'>
            {isLoaded
              ? itemsBusiness
                  .slice(0, 3)
                  .map((obj, index) => (
                    <BusinessColumn key={`${obj.source.name}_${index}`} {...obj} />
                  ))
              : Array(3)
                  .fill(0)
                  .map((_, index) => <BusinessLoader key={index} />)}
            {isLoaded
              ? itemsBusiness
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

export default BusinessPosts;
