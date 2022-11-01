import AppContext from './context/AppContext';
import { AppWrap } from './App.style';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './Routes/AppRoutes';
import Footer from './components/Footer';
import views from './db/views.json';

const App = () => {
  return (
    <AppContext.Provider value={{ views }}>
      <AppWrap>
        <BrowserRouter>
          <AppRoutes />
          <Footer />
        </BrowserRouter>
      </AppWrap>
    </AppContext.Provider>
  );
};

export default App;
