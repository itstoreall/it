import { useWeb3React } from '@web3-react/core';
import { contractNetwork } from '../components/Blockchain/constants/general';
import { getCBCContract } from '../components/Blockchain/contracts';

const useContract = () => {
  const { chainId } = useWeb3React();

  if (chainId) {
    try {
      if (chainId !== contractNetwork) throw new Error('not a Poligon network');

      if (chainId === contractNetwork) {
        const contract = chainId && getCBCContract(chainId);

        return contract;
      }
    } catch (e) {
      console.log(' * WORN:', e.message);
      console.log('');
    }
  }
};

export default useContract;
