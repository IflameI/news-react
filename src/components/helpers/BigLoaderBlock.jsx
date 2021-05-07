import React from 'react';
import ContentLoader from 'react-content-loader';
import useBreakpoints from './CheckQueryHuks/useBreakpoints';

const BigLoaderBlock = () => {
  const { isMd2, isMd1 } = useBreakpoints();
  return (
    <ContentLoader
      speed={2}
      width={isMd2 ? 1000 : isMd1 ? 495 : 545}
      height={460}
      backgroundColor='#f3f3f3'
      foregroundColor='#ecebeb'>
      <rect
        x={isMd2 ? '0' : '10'}
        y='10'
        rx='0'
        ry='0'
        width={isMd2 ? 1000 : isMd1 ? 495 : 545}
        height='110'
      />
      <rect
        x={isMd2 ? '0' : '10'}
        y='130'
        rx='0'
        ry='0'
        width={isMd2 ? 1000 : isMd1 ? 495 : 545}
        height='200'
      />
    </ContentLoader>
  );
};

export default BigLoaderBlock;
//545
