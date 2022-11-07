// import allowSwitchNetwork from './allowSwitchNetwork';

const detectNetwork = async () => {
  console.log('detectNetwork');

  const eth = window.ethereum;

  const chainId = 80001;

  if (!eth) throw new Error('No crypto wallet found');

  if (+eth.networkVersion !== chainId) {
    console.log('detectNetwork -> chainId:', +eth.networkVersion);

    // allowSwitchNetwork();
  }
};

export default detectNetwork;
