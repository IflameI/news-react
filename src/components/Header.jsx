import React from 'react';

const Header = ({ items, onClickCountry, activeCountry }) => {
  const activeLabel = items.find((obj) => obj.type === activeCountry).name;

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
          <div className='menu__icon icon-menu'>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <nav className='header__menu menu'>
            <div className='menu__body'>
              <ul className='menu__list'>
                {items.map((obj, index) => (
                  <li
                    className={activeCountry === obj.type ? 'active' : ''}
                    onClick={() => onSelectCountry(obj)}
                    key={`${obj.type}_${index}`}>
                    {obj.name}
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
