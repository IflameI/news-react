import ContentLoader from 'react-content-loader';
const BusinessLoader: React.FC = () => (
  <ContentLoader
    speed={2}
    width={1100}
    height={330}
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'>
    <rect x='0' y='10' rx='0' ry='0' width='1130' height='300' />
  </ContentLoader>
);

export default BusinessLoader;
