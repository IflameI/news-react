import { Burger } from '.';
import { countryListType } from '../App';

interface IHeader {
  items: countryListType[];
  onClickCountry: (type: string) => void;
  activeCountry: string;
}

const Header: React.FC<IHeader> = ({ items, onClickCountry, activeCountry }) => {
  const onSelectCountry = (index: string) => {
    if (onClickCountry) {
      onClickCountry(index);
    }
  };
  return (
    <header className='header'>
      <div className='container'>
        <div className='header__row'>
          <div className='header__logo'>
            REACT-<span>NEWS</span>
          </div>
          <nav className='header__menu menu'>
            <div className='menu__body'>
              <Burger
                onSelectCountry={onSelectCountry}
                items={items}
                activeCountry={activeCountry}
              />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
