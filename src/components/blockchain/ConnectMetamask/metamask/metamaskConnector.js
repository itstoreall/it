const metamaskConnector = () => {
  const we = window.ethereum;

  if (typeof we !== 'undefined') {
    console.log('MetaMask is installed!');
    console.log('isMetaMask', we.isMetaMask);
    console.log('networkVersion', we.networkVersion);
    console.log('selectedAddress', we.selectedAddress);

    we.request({ method: 'eth_requestAccounts' });
  }
};

export default metamaskConnector;
