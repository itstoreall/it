import { contractNetwork } from '../constants/general';
import allowSwitchNetwork from './allowSwitchNetwork'; // *

const detectNetwork = async () => {
  console.log('detectNetwork');

  const eth = window.ethereum;

  if (!eth) throw new Error('No crypto wallet found');

  if (+eth.networkVersion !== contractNetwork) {
    console.log('detectNetwork -> contractNetwork:', +eth.networkVersion);

    allowSwitchNetwork(); // *
  }
};

export default detectNetwork;
