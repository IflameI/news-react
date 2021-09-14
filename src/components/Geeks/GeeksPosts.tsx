import { LoaderBlock, BigLoaderBlock, MainContentBigColumn, MainContentColumn } from '..';
import { useTypedSelector } from '../../redux/typeHooks/useTypedSelector';

const GeeksPosts = () => {
  const { isLoaded, itemsTechnology } = useTypedSelector((state) => state.news);

  return (
    <section className='geeks'>
      <div className='container'>
        <div className='geeks__title'>Top headlines from science world</div>
        <div className='geeks__content'>
          <div className='geeks__row'>
            {isLoaded
              ? itemsTechnology
                  .slice(0, 2)
                  .map((obj, index) => (
                    <MainContentBigColumn key={`${obj.source.name}_${index}`} {...obj} />
                  ))
              : Array(2)
                  .fill(0)
                  .map((_, index) => <BigLoaderBlock key={index} />)}
            {isLoaded
              ? itemsTechnology
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

export default GeeksPosts;
