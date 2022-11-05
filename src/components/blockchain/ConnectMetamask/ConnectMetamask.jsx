import {
  Container,
  Wallet,
  ConnetcMetamaskButton,
} from './ConnectMetamask.style';
import AccountContainer from './AccountContainer';
import useMetaMask from './hooks/metamask';

const ConnectMetamask = () => {
  const { connect, disconnect, isActive, account } = useMetaMask();

  return (
    <Container>
      <AccountContainer isActive={isActive} />
      <div>
        {isActive ? (
          <ConnetcMetamaskButton onClick={disconnect} variant='danger'>
            Disconnect MetaMask
          </ConnetcMetamaskButton>
        ) : (
          <ConnetcMetamaskButton onClick={connect} variant='secondary'>
            Connect MetaMask
          </ConnetcMetamaskButton>
        )}
      </div>
    </Container>
  );
};

export default ConnectMetamask;
