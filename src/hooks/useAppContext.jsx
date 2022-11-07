import { useContext } from 'react';
import AppContext from '../../../../context/AppContext';

const useAppContext = () => {
  console.log('useMetaMask');
  const context = useContext(AppContext);

  if (context === undefined) {
    throw new Error('no AppProvider');
  }

  return context;
};

export default useAppContext;
