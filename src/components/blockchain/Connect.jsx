import { connectors } from './connectors';
import { useWeb3React } from '@web3-react/core';
import { connectWallet } from './walletUtils';

const Connect = () => {
  const { activate, chainId, account } = useWeb3React();

  console.log('chainId -->', chainId);
  console.log('account -->', account);

  const connectWalletHandler = connector => {
    connectWallet(activate, connectors[connector], connector);
  };

  return <div onClick={() => connectWalletHandler('injected')}>Metamask</div>;
};

export default Connect;
