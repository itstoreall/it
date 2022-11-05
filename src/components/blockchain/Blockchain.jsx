import { BlockchainSection } from './Blockchain.style.js';
import ConnectMetamask from './ConnectMetamask/ConnectMetamask.jsx';

const Blockchain = ({ view }) => {
  return (
    <BlockchainSection>
      <h1>{view.title}</h1>
      <ConnectMetamask />
    </BlockchainSection>
  );
};

export default Blockchain;
