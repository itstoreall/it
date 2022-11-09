import { BlockchainSection } from './Blockchain.style.js';
import ConnectMetamask from './ConnectMetamask/ConnectMetamask.jsx';
import ContractData from './ContractData/ContractData';

const Blockchain = ({ view }) => {
  return (
    <BlockchainSection>
      <h1>{view.title}</h1>
      <ConnectMetamask />
      <ContractData />
    </BlockchainSection>
  );
};

export default Blockchain;
