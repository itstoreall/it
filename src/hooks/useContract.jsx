import { useWeb3React } from '@web3-react/core';
import { getCBCContract } from '../components/Blockchain/contracts';

const useContract = () => {
  const { chainId } = useWeb3React();

  const contractNetwork = 80001;

  if (chainId) {
    if (chainId && chainId !== contractNetwork)
      throw new Error('not a Poligon network');

    if (chainId && chainId === contractNetwork) {
      const contract = chainId && getCBCContract(chainId);

      return contract;
    }
  }
};

export default useContract;
