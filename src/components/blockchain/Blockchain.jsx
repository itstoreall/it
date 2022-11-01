// import { Web3ReactProvider, useWeb3React } from '@web3-react/core';
// import Web3 from 'web3';
// import Connect from './Connect';
// import { provider } from 'web3-core';
import { BlockchainSection } from './Blockchain.style.js';

// const getLibrary = provider => {
//   return new Web3(provider);
// };

const Blockchain = ({ view }) => {
  console.log('Blockchain');

  return (
    <BlockchainSection>
      <h1>{view.title}</h1>
      <div>Blockchain</div>
    </BlockchainSection>
    // <Web3ReactProvider getLibrary={getLibrary}>
    // <Connect />
    // </Web3ReactProvider>
  );
};

export default Blockchain;
