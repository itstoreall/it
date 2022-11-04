import AppContext from './context/AppContext';
import { AppWrap } from './App.style';
import { useResolvedPath } from 'react-router-dom';
import AppRoutes from './Routes/AppRoutes';
import Footer from './components/Footer';
import views from './db/views.json';

const App = () => {
  const { pathname } = useResolvedPath();

  return (
    <AppContext.Provider value={{ views, pathname }}>
      <AppWrap>
        <AppRoutes />
        <Footer />
      </AppWrap>
    </AppContext.Provider>
  );
};

export default App;
