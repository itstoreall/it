import detectNetwork from './detectNetwork';

const signWalletMessage = async deactivate => {
  if (!window.ethereum) {
    throw new Error('No crypto wallet found. Please install it.');
  }

  detectNetwork();

  const accounts = await window.ethereum.request({
    method: 'eth_requestAccounts',
  });

  const account = accounts[0];

  console.log('signWalletMessage account', account);
};

const accountChangeCheck = deactivate => {
  console.log('accountChangeCheck');

  window.ethereum.on('accountsChanged', address => {
    console.log('accountChangeCheck address:', address[0]);

    // if (localStorage.getItem('provider') === 'undefined') return;
    // localStorage.removeItem('jwt');
    signWalletMessage(deactivate);
  });
};

export default accountChangeCheck;
