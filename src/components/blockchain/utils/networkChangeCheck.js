import detectNetwork from './detectNetwork';

const networkChangeCheck = () => {
  window.ethereum.on('networkChanged', detectNetwork);
  return () => {
    window.ethereum.on('networkChanged', detectNetwork);
  };
};

export default networkChangeCheck;
