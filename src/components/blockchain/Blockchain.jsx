import { Web3ReactProvider, useWeb3React } from '@web3-react/core';
import Web3 from 'web3';
import Connect from './Connect';
// import { provider } from 'web3-core';

const getLibrary = provider => {
  return new Web3(provider);
};

const Blockchain = () => {
  console.log('Blockchain');

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <div>Blockchain</div>
      <Connect />
    </Web3ReactProvider>
  );
};

export default Blockchain;
