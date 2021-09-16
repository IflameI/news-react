import { NavLink } from 'react-router-dom';
import { Burger } from '.';

interface IHeader {
  onClickCountry: (type: string) => void;
  activeCountry: string;
}

const Header: React.FC<IHeader> = ({ onClickCountry, activeCountry }) => {
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
            <NavLink exact to='/'>
              REACT-<span>NEWS</span>
            </NavLink>
          </div>
          <div className='header__list'>
            <ul>
              <li>
                <NavLink exact to='/MyList' activeClassName='header__li-active'>
                  My list
                </NavLink>
              </li>
              <li>
                <NavLink exact to='/' activeClassName='header__li-active'>
                  Discover
                </NavLink>
              </li>
            </ul>
          </div>
          <nav className='header__menu menu'>
            <div className='menu__body'>
              <Burger onSelectCountry={onSelectCountry} activeCountry={activeCountry} />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
