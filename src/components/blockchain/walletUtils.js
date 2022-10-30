import { connectors } from './connectors';
// import { networks } from './networks'; // *

export const connectWallet = async (activate, connector, type) => {
  try {
    await activate(connector);
    localStorage.setItem('provider', type);
  } catch (e) {
    console.error(e);
  }
};

export const connectWalletOnPageLoad = activate => {
  const provider = localStorage.getItem('provider');

  if (provider) {
    try {
      activate(connectors[provider]);
    } catch (e) {
      console.error(e);
    }
  }
};

export const disconnectWallet = deactivate => {
  localStorage.removeItem('provider');
  deactivate();
};

/*
export const changeNetwork = async networkName => {
  try {
    if (!window.ethereum) throw new Error('No crypto wallet found');

    if (networkName === 'eth') {
      return await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: `0x${Number(80001).toString(16)}` }],
      });
    }
    await window.ethereum.request({
      method: 'wallet_addEthereumChain',
      params: [
        {
          ...networks[networkName],
        },
      ],
    });
  } catch (e) {
    console.error(e);
  }
};
*/
