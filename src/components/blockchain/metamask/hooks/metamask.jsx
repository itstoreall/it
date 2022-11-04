import {
  useMemo,
  useEffect,
  useCallback,
  createContext,
  useContext,
  useState,
} from 'react';
import { injected } from '../wallet/connectors';
import { useWeb3React } from '@web3-react/core';

export const MetaMaskContext = createContext(null);

export const MetaMaskProvider = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const { activate, account, library, connector, active, deactivate } =
    useWeb3React();

  const [isActive, setIsActive] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Init Loading
  useEffect(() => {
    connect().then(val => {
      setIsLoading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleIsActive = useCallback(() => {
    setIsActive(active);
  }, [active]);

  useEffect(() => {
    handleIsActive();
  }, [handleIsActive]);

  // Connect to MetaMask wallet
  const connect = async () => {
    console.log('Connecting to MetaMask Wallet');
    try {
      await activate(injected);
    } catch (error) {
      console.log('Error on connecting: ', error);
    }
  };

  // Disconnect from Metamask wallet
  const disconnect = async () => {
    console.log('Deactivating...');
    try {
      deactivate(); // await
    } catch (error) {
      console.log('Error on disconnecting: ', error);
    }
  };

  const values = useMemo(
    () => ({
      isActive,
      account,
      isLoading,
      connect,
      disconnect,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isActive, isLoading]
  );

  return (
    <MetaMaskContext.Provider value={values}>
      {children}
    </MetaMaskContext.Provider>
  );
};

export default function useMetaMask() {
  const context = useContext(MetaMaskContext);

  if (context === undefined) {
    throw new Error(
      'useMetaMask hook must be used with a MetaMaskProvider component'
    );
  }

  return context;
}
