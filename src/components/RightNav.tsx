import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';

export type countryListType = {
  name: string;
  type: string;
};

const countryList: countryListType[] = [
  { name: 'English', type: 'us' },
  { name: 'Russia', type: 'ru' },
  { name: 'Italy', type: 'it' },
  { name: 'Ukraine', type: 'ua' },
  { name: 'France', type: 'fr' },
  { name: 'Germany', type: 'de' },
];

interface IRightNav {
  onSelectCountry: (index: any) => void;
  activeCountry: string;
  open: boolean;
}

const RightNav: React.FC<IRightNav> = ({ onSelectCountry, open, activeCountry }) => {
  const [popupMenuLang, setPopupMenuLang] = useState(false);

  const popupRef = useRef<HTMLHeadingElement>(null);

  const onClickMenuLang = () => () => {
    setPopupMenuLang(!popupMenuLang);
  };

  const handleOutsideClick = (event: any) => {
    const path = event.path || (event.composedPath && event.composedPath());
    if (!path.includes(popupRef.current)) {
      setPopupMenuLang(false);
    }
    console.log(event.type);
  };

  useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
  }, []);

  return (
    <>
      <div ref={popupRef} onClick={onClickMenuLang()} className='menu__lang'>
        LG
      </div>
      <div
        className={classNames('menu__popup', {
          active: popupMenuLang,
        })}>
        <ul
          className={classNames('menu__list', {
            open: open,
          })}>
          {countryList.map((obj, index) => (
            <li
              className={activeCountry === obj.type ? 'active' : ''}
              onClick={() => onSelectCountry(obj)}
              key={`${obj.type}_${index}`}>
              {obj.name}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default RightNav;
