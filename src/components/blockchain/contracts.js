import { web3 } from './constants';
import cbcAbi from './abis/cbcAbi.json';

export const getCBCContractAddress = chainId => {
  const addresses = {
    80001: '0x873DD21C7Fe990734Fc142D66523B951944c5f6B',
    5: '0x873DD21C7Fe990734Fc142D66523B951944c5f6B',
  };
  return addresses[chainId];
};

export const getCBCContract = async chainId => {
  return new web3.eth.Contract(cbcAbi, getCBCContractAddress(chainId));
};
