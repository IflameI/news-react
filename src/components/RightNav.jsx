import React from 'react';
import classNames from 'classnames';
const RightNav = ({ onSelectCountry, items, open, activeCountry }) => {
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
