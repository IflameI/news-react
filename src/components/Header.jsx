import React from 'react';
import { Burger } from '.';

const Header = ({ items, onClickCountry, open, activeCountry }) => {
  const onSelectCountry = (index) => {
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
                open={open}
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
