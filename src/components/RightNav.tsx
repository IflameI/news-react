import classNames from 'classnames';
import { countryListType } from '../App';

interface IRightNav {
  onSelectCountry: (index: any) => void;
  items: countryListType[];
  activeCountry: string;
  open: boolean;
}

const RightNav: React.FC<IRightNav> = ({ onSelectCountry, items, open, activeCountry }) => {
  return (
    <ul
      className={classNames('menu__list', {
        open: open,
      })}>
      {items.map((obj, index) => (
        <li
          className={activeCountry === obj.type ? 'active' : ''}
          onClick={() => onSelectCountry(obj)}
          key={`${obj.type}_${index}`}>
          {obj.name}
        </li>
      ))}
    </ul>
  );
};

export default RightNav;
