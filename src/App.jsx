/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { AppWrap } from './App.style';
import { useWeb3React } from '@web3-react/core';
import AppProvider from './providers/AppProvider';
import AppRoutes from './Routes/AppRoutes';
import Footer from './components/Footer';
import networkChangeCheck from './components/Blockchain/utils/networkChangeCheck';
import accountChangeCheck from './components/Blockchain/utils/accountChangeCheck';

const App = () => {
  const { deactivate } = useWeb3React();

  useEffect(() => {
    console.log('');
    console.log('uE App');
    if (window.ethereum) {
      networkChangeCheck();
      accountChangeCheck(deactivate);
    }
  }, []);

  return (
    <AppProvider>
      <AppWrap>
        <AppRoutes />
        <Footer />
      </AppWrap>
    </AppProvider>
  );
};

export default App;
