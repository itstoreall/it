import { Web3ReactProvider } from '@web3-react/core';
import Web3 from 'web3';
import MetaMaskProvider from '../../providers/MetaMaskProvider';
import { ViewWrap } from '../View.style';
import Blockchain from '../../components/Blockchain/Blockchain';

function getLibrary(provider, connector) {
  const library = new Web3(provider);
  library.pollingInterval = 12000;
  return library;
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
