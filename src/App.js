import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppWrap } from './App.style';
import Footer from './components/Footer';
import viewHandler from './views/viewHandler';
import views from './db/views.json';
import HomeView from './views/HomeView';

const App = () => {
  return (
    <AppWrap>
      <BrowserRouter>
        <Routes>
          {views.map(view => {
            return (
              <Route
                key={view.title}
                path={view.path}
                element={viewHandler(view.title)}
              />
            );
          })}
          {/* <Route element={<Navigate replace to='/' />} /> */}
          <Route path='*' element={<Navigate to='/home' />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AppWrap>
  );
};

export default App;
