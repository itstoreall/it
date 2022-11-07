import networks from '../constants/networks';

const getChainNameByCainId = chainId => {
  return networks[
    chainId === 1
      ? 'eth'
      : chainId === 5
      ? 'goerli'
      : chainId === 137
      ? 'polygon'
      : chainId === 80001 && 'mumbai'
  ].nativeCurrency.symbol;
};

export default getChainNameByCainId;
