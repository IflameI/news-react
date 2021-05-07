import React from 'react';
import ContentLoader from 'react-content-loader';
import useBreakpoints from './CheckQueryHuks/useBreakpoints';

const LoaderBlock = () => {
  const { isMd2, isMd1 } = useBreakpoints();
  return (
    <ContentLoader
      speed={2}
      width={isMd2 ? 1000 : isMd1 ? 330 : 363}
      height={412}
      backgroundColor='#f3f3f3'
      foregroundColor='#ecebeb'>
      <rect
        x={isMd2 ? '0' : '10'}
        y='10'
        rx='0'
        ry='0'
        width={isMd2 ? 1000 : isMd1 ? 330 : 363}
        height='210'
      />
      <rect
        x={isMd2 ? '0' : '10'}
        y='224'
        rx='0'
        ry='0'
        width={isMd2 ? 1000 : isMd1 ? 330 : 363}
        height='90'
      />
    </ContentLoader>
  );
};

export default LoaderBlock;
//363
