import { useContext } from 'react';
import AppContext from '../context/AppContext';
import { Routes, Route } from 'react-router-dom';
import componentHandler from './componentHandler';
import Page404 from '../views/Page404';

const AppRoutes = () => {
  const { views } = useContext(AppContext);

  return (
    <Routes>
      {views.map(view => {
        return (
          <Route
            key={view.title}
            path={view.path}
            element={componentHandler(view.title, view)}
          />
        );
      })}
      <Route path='*' element={<Page404 />} />
    </Routes>
  );
};

export default AppRoutes;
