import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

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

RightNav.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  onClickCountry: PropTypes.func,
  activeCountry: PropTypes.string.isRequired,
  open: PropTypes.bool,
};

RightNav.defaultProps = {
  activeCountry: 'us',
};
export default RightNav;
