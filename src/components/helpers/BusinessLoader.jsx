import React from 'react';
import ContentLoader from 'react-content-loader';
const BusinessLoader = () => (
  <ContentLoader
    speed={2}
    width={1100}
    height={330}
    viewBox={(0, 0, 1000, 1000)}
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'>
    <rect x='0' y='10' rx='0' ry='0' width='1130' height='300' />
  </ContentLoader>
);

export default BusinessLoader;
