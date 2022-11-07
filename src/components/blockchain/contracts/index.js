import Web3 from 'web3';
import cbcAbi from '../abis/cbcAbi.json';

export const getCBCContractAddress = chainId => {
  const addresses = { 80001: '0x873DD21C7Fe990734Fc142D66523B951944c5f6B' };

  return addresses[chainId] ?? console.error('chainId is undefined');
};

export const getCBCContract = chainId => {
  const web3 = new Web3(Web3.givenProvider);

  return new web3.eth.Contract(cbcAbi, getCBCContractAddress(chainId));
};
