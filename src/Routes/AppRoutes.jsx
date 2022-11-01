import { useContext } from 'react';
import AppContext from '../context/AppContext';
import { Routes, Route, Navigate } from 'react-router-dom';
import viewHandler from './routeHandler';

const AppRoutes = () => {
  const { views } = useContext(AppContext);

  return (
    <Routes>
      {views.map(view => {
        return (
          <Route
            key={view.title}
            path={view.path}
            element={viewHandler(view.title, view)}
          />
        );
      })}
      <Route path='*' element={<Navigate to='/not-found' />} />
    </Routes>
  );
};

export default AppRoutes;
