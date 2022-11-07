import { useWeb3React } from '@web3-react/core';
import { contractNetwork } from './constants/general';
import { BlockchainSection } from './Blockchain.style.js';
import ConnectMetamask from './ConnectMetamask/ConnectMetamask.jsx';
import useContract from '../../hooks/useContract.jsx';

const Blockchain = ({ view }) => {
  const { chainId } = useWeb3React();
  const contract = useContract();

  const getName = async () => await contract?.methods.name().call();

  if (chainId && chainId === contractNetwork) {
    getName().then(console.log);
  }

  return (
    <BlockchainSection>
      <h1>{view.title}</h1>
      <ConnectMetamask />
    </BlockchainSection>
  );
};

export default Blockchain;
