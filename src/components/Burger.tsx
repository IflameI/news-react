import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';

import { RightNav } from '.';

interface IBurger {
  onSelectCountry: (index: any) => void;
  activeCountry: string;
}

const Burger: React.FC<IBurger> = ({ onSelectCountry, activeCountry }) => {
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
      <RightNav onSelectCountry={onSelectCountry} open={open} activeCountry={activeCountry} />
    </>
  );
};

export default Burger;
