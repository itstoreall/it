import { useContext } from 'react';
import MetaMaskContext from '../context/MetaMaskContext';

const useMetaMask = () => {
  console.log('useMetaMask');
  const context = useContext(MetaMaskContext);

  if (context === undefined) {
    throw new Error('no MetaMaskProvider');
  }

  return context;
};

export default useMetaMask;
