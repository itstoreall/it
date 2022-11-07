import { Container, ConnetcMetamaskButton } from './ConnectMetamask.style';
import AccountContainer from './AccountContainer';
import useMetaMask from '../../..//hooks/useMetaMask';

const ConnectMetamask = () => {
  const { connect, disconnect, isActive } = useMetaMask();

  return (
    <Container>
      <AccountContainer isActive={isActive} />
      <div>
        {isActive ? (
          <ConnetcMetamaskButton onClick={disconnect}>
            Disconnect MetaMask
          </ConnetcMetamaskButton>
        ) : (
          <ConnetcMetamaskButton onClick={connect}>
            Connect MetaMask
          </ConnetcMetamaskButton>
        )}
      </div>
    </Container>
  );
};

export default ConnectMetamask;
