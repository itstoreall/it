import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { WalletLinkConnector } from '@web3-react/walletlink-connector';

export const injected = new InjectedConnector({
  supportedChainIds: [80001, 5],
});

export const walletConnect = new WalletConnectConnector({
  rpcUrl: `https://mainnet.infura.io/v3/12edd7803f0b447087759e6c75339d82`,
  bridge: 'https://bridge.walletconnect.org',
  qrcode: true,
});

export const walletLink = new WalletLinkConnector({
  url: `https://mainnet.infura.io/v3/12edd7803f0b447087759e6c75339d82`,
  appName: 'itstoreall',
});

export const connectors = {
  injected: injected,
  walletConnect: walletConnect,
  coinbaseWallet: walletLink,
};
