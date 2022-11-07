import { BlockchainSection } from './Blockchain.style.js';
import ConnectMetamask from './ConnectMetamask/ConnectMetamask.jsx';
import useContract from '../../hooks/useContract.jsx';

const Blockchain = ({ view }) => {
  const contract = useContract();

  const getName = async () => await contract?.methods.name().call();

  getName().then(console.log);

  return (
    <BlockchainSection>
      <h1>{view.title}</h1>
      <ConnectMetamask />
    </BlockchainSection>
  );
};

export default Blockchain;
