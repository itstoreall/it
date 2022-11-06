import { useEffect, useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import getBalance from '../utils/getBalance';
import setSVG from '../../../svg/setSVG';
import {
  WalletBalanceContainer,
  WalletAddressContainer,
  WalletAddressContent,
} from './styles';
import { StyleButton } from '../Blockchain.style';
import stringTrim from '../utils/stringTrim';
import useCopyToClipboard from './hooks/useCopy';

const AccountContainer = ({ isActive }) => {
  const { chainId, account, library } = useWeb3React();
  const [balance, setBalance] = useState(0);
  const [isCopySuccess, copy] = useCopyToClipboard();

  useEffect(() => {
    if (account) {
      getBalance(library, account).then(res =>
        setBalance(+(+res / 1e18).toFixed(2))
      );
    } else setBalance(0);
  }, [chainId, account, isActive, library]);

  return (
    <>
      <WalletAddressContainer>
        <WalletBalanceContainer>{balance} ETH</WalletBalanceContainer>
        <>
          <WalletAddressContent>
            {isActive && (
              <>
                {stringTrim(account, 12)}
                {!isCopySuccess ? (
                  <StyleButton
                    width={15}
                    height={15}
                    onClick={() => copy(account)}
                  >
                    {setSVG('icon-copy', {
                      width: 15,
                      height: 15,
                      fill: 'grey',
                      hover: 'darkgrey',
                    })}
                  </StyleButton>
                ) : (
                  <StyleButton width={15} height={15}>
                    {setSVG('icon-check', {
                      width: 13,
                      height: 13,
                      fill: 'palevioletred',
                    })}
                  </StyleButton>
                )}
              </>
            )}
          </WalletAddressContent>
        </>
      </WalletAddressContainer>
    </>
  );
};

export default AccountContainer;
