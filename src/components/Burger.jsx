import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import { RightNav } from '.';

const Burger = ({ onSelectCountry, items, activeCountry }) => {
  const [open, setOpen] = useState(false);
  const burgerRef = useRef();

  const handleOutsideClick = (event) => {
    const path = event.path || (event.composedPath && event.composedPath());
    if (!path.includes(burgerRef.current)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
  }, []);
  return (
    <>
      <div
        ref={burgerRef}
        onClick={() => setOpen(!open)}
        className={classNames('styledBurger', {
          open: open,
        })}>
        <div className='elementBurger'></div>
        <div className='elementBurger'></div>
        <div className='elementBurger'></div>
      </div>
      <RightNav
        onSelectCountry={onSelectCountry}
        items={items}
        open={open}
        activeCountry={activeCountry}
        burgerRef={burgerRef}
      />
    </>
  );
};

export default Burger;
