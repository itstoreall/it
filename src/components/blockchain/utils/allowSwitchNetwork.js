import networks from '../constants/networks';

const allowSwitchNetwork = async () => {
  try {
    await window.ethereum.request({
      method: 'wallet_addEthereumChain',
      params: [
        {
          ...networks['mumbai'],
        },
      ],
    });
  } catch (e) {
    console.error('err in detectNetwork', e);
  }
};

export default allowSwitchNetwork;
