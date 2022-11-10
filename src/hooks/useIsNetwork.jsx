import { useWeb3React } from '@web3-react/core';
import { contractNetwork } from '../components/Blockchain/constants/general';

const useIsNetwork = () => {
  const { chainId } = useWeb3React();

  return chainId === contractNetwork;
};

export default useIsNetwork;
