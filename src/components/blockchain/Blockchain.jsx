/* eslint-disable jsx-a11y/alt-text */
// import { Web3ReactProvider, useWeb3React } from '@web3-react/core';
// import Web3 from 'web3';
// import Connect from './Connect';
// import { provider } from 'web3-core';
// import { useEffect } from 'react';
// import { injected } from './metamask/wallet/connectors';
import { BlockchainSection } from './Blockchain.style.js';
import useMetaMask from './metamask/hooks/metamask';

const Blockchain = ({ view }) => {
  const { connect, disconnect, isActive, account } = useMetaMask();

  return (
    <BlockchainSection>
      <h1>{view.title}</h1>
      <div>
        <button onClick={connect} variant='secondary'>
          <img
            src='images/metamask.svg'
            alt='MetaMask'
            width='50'
            height='50'
          />{' '}
          Connect With MetaMask
        </button>
        {isActive ? (
          <span>Connected with {account}</span>
        ) : (
          <span>Not Connected</span>
        )}

        <button onClick={disconnect} variant='danger'>
          Disconnect from MetaMask{' '}
          <img src='images/noun_waving_3666509.svg' height='50' width='50' />
        </button>
      </div>
    </BlockchainSection>
  );
};

export default Blockchain;
