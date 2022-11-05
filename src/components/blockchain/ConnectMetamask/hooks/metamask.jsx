/* eslint-disable react-hooks/exhaustive-deps */
import {
  useMemo,
  useEffect,
  useCallback,
  createContext,
  useContext,
  useState,
} from 'react';
import { injected } from '../metamask/wallet/connectors';
import { useWeb3React } from '@web3-react/core';

const { log } = console;

export const MetaMaskContext = createContext(null);

export const MetaMaskProvider = ({ children }) => {
  const { activate, account, active, deactivate } = useWeb3React();

  const [isActive, setIsActive] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    connect().then(val => {
      setIsLoading(false);
    });
  }, []);

  const handleIsActive = useCallback(() => {
    setIsActive(active);
  }, [active]);

  useEffect(() => {
    handleIsActive();
  }, [handleIsActive]);

  const connect = async () => {
    log('Connect MetaMask');
    try {
      await activate(injected);
    } catch (e) {
      log('Error on connect:', e);
    }
  };

  const disconnect = async () => {
    log('Disconnect MetaMask');
    try {
      await deactivate();
    } catch (e) {
      log('Error on disconnect:', e);
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
    throw new Error('no MetaMaskProvider');
  }

  return context;
}
