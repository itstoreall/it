/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo } from 'react';
import AppContext from '../context/AppContext';
import { useResolvedPath } from 'react-router-dom';
import views from '../db/views.json';

const AppProvider = ({ children }) => {
  const { pathname } = useResolvedPath();

  const values = useMemo(
    () => ({
      pathname,
      views,
    }),
    [pathname, views]
  );

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export default AppProvider;
