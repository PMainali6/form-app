import { FC, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop: FC = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
    });
  }, [pathname]);

  return null;
};
