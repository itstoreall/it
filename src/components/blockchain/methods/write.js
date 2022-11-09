export const mintNFT = async (contract, account, uri, expire, subscridtion) => {
  try {
    return await contract.methods
      .safeMint(account, uri, expire, subscridtion)
      .send({ from: account })
      .on('receipt', receipt => receipt)
      .on('error', error => error);
  } catch (e) {
    console.log(e.message);
    return 'Mint Error';
  }
};
