import { Web3ReactProvider } from '@web3-react/core';
import Web3 from 'web3';
import { MetaMaskProvider } from '../../components/Blockchain/metamask/hooks/metamask';
import { ViewWrap } from '../View.style';
import Blockchain from '../../components/Blockchain/Blockchain';

function getLibrary(provider, connector) {
  return new Web3(provider);
}

const BlockchainView = ({ view }) => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <MetaMaskProvider>
        <ViewWrap>
          <Blockchain view={view} />
        </ViewWrap>
      </MetaMaskProvider>
    </Web3ReactProvider>
  );
};

export default BlockchainView;
