import useMediaQuery from './useMediaQuery';

export default function useBreakpoints() {
  const breakpoints = {
    isXs: useMediaQuery('(max-width: 640px)'),
    isSm: useMediaQuery('(min-width: 641px) and (max-width: 768px)'),
    isMd: useMediaQuery('(min-width: 769px) and (max-width: 1024px)'),
    isLg: useMediaQuery('(min-width: 1025px)'),
    isMd2: useMediaQuery('(max-width: 992px)'),
    isMd1: useMediaQuery('(max-width: 1142px)'),

    active: 'xs',
  };
  if (breakpoints.isXs) breakpoints.active = 'xs';
  if (breakpoints.isSm) breakpoints.active = 'sm';
  if (breakpoints.isMd) breakpoints.active = 'md';
  if (breakpoints.isLg) breakpoints.active = 'lg';
  if (breakpoints.isMd2) breakpoints.active = 'md2';
  if (breakpoints.isMd2) breakpoints.active = 'md1';

  return breakpoints;
}
