import { useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import { Section, SectionButton } from './ContractData.style';
import useIsNetwork from '../../../hooks/useIsNetwork';
import useContract from '../../../hooks/useContract.jsx';
import { mintNFT } from '../methods/write';

const ContractData = () => {
  const [mintedNFT, setMintedNFT] = useState(null);
  const { account } = useWeb3React();
  const contract = useContract();

  const isNetwork = useIsNetwork();

  const mint = async () => {
    setMintedNFT(null);

    if (contract)
      mintNFT(contract, account, '888', '25-05-2023', 'basic').then(data => {
        data && typeof data !== 'string'
          ? setMintedNFT({
              to: data.events.Transfer.returnValues.to,
              tokenId: data.events.Transfer.returnValues.tokenId,
            })
          : setMintedNFT(data);
      });
  };

  return (
    <Section>
      <SectionButton
        style={{ marginRight: '5px' }}
        disabled={!isNetwork}
        onClick={() => mint()}
      >
        Mint NFT
      </SectionButton>
      {mintedNFT && (
        <>
          {typeof mintedNFT === 'string' ? (
            <div>
              <span>{mintedNFT}</span>
            </div>
          ) : (
            <div>
              <span>NFT: {mintedNFT.tokenId}</span>
              <span> to {`${mintedNFT.to.slice(0, 7)}...`}</span>
            </div>
          )}
        </>
      )}
    </Section>
  );
};

export default ContractData;
