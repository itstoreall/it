const networks = {
  ropsten: {
    chainId: `0x${Number(3).toString(16)}`,
    chainName: 'Ropsten',
    nativeCurrency: {
      name: 'Ropsten Ether',
      symbol: 'ETH',
      decimals: 18,
    },
    rpcUrls: ['https://ropsten.infura.io/v3/'],
  },
  polygon: {
    chainId: `0x${Number(137).toString(16)}`,
    chainName: 'Polygon Mainnet',
    nativeCurrency: {
      name: 'MATIC',
      symbol: 'MATIC',
      decimals: 18,
    },
    rpcUrls: ['https://polygon-rpc.com/'],
  },
  mumbai: {
    chainId: `0x${Number(80001).toString(16)}`,
    chainName: 'Mumbai',
    nativeCurrency: {
      name: 'MATIC',
      symbol: 'MATIC',
      decimals: 18,
    },
    rpcUrls: ['https://matic-mumbai.chainstacklabs.com/'],
  },
};

export default networks;
