import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';

import { RightNav } from '.';
import { countryListType } from '../App';

interface IBurger {
  onSelectCountry: (index: any) => void;
  items: countryListType[];
  activeCountry: string;
}

const Burger: React.FC<IBurger> = ({ onSelectCountry, items, activeCountry }) => {
  const [open, setOpen] = useState<boolean>(false);
  const burgerRef = useRef<HTMLHeadingElement>(null);

  const handleOutsideClick = (event: any) => {
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
      />
    </>
  );
};

export default Burger;
