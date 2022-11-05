import { useEffect, useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import SVGIcon from '../../../svg/setSVG';
import {
  WalletAddressContainer,
  WalletAddressContent,
  // WalletIcon,
} from './styles';
import { StyleButton } from '../Blockchain.style';
import stringTrim from './utils/stringTrim';
import useCopyToClipboard from './hooks/useCopy';

const AccountContainer = ({ isActive }) => {
  const { account, deactivate, library } = useWeb3React();
  // const [balance, setBalance] = useState(0);
  const [isCopySuccess, copy] = useCopyToClipboard();
  // const { isTablet } = useCheckIsMobile();
  // const dispatch = useDispatch();
  // @ts-ignore
  // const isBurgerMenu = useSelector((state) => state.global?.isBurgerMenu);

  // useEffect(() => {
  //   if (account)
  //     getBalance(library, account).then(res =>
  //       setBalance(+(+res / 1e18).toFixed(2))
  //     );
  // }, [account]);

  return (
    <>
      {/* <WalletIcon /> */}
      {/* <StyledText>{balance} ETH</StyledText> */}
      <WalletAddressContainer>
        <>
          <WalletAddressContent>
            {isActive ? (
              <>
                {stringTrim(account, 12)}
                {isCopySuccess ? (
                  // <CopySuccessIcon />
                  <StyleButton>
                    {SVGIcon('icon-check', {
                      width: 15,
                      height: 15,
                      fill: 'palevioletred',
                    })}
                  </StyleButton>
                ) : (
                  <StyleButton onClick={() => copy(account)}>
                    {SVGIcon('icon-copy', {
                      width: 15,
                      height: 15,
                      fill: 'grey',
                      hover: 'darkgrey',
                    })}
                  </StyleButton>
                )}
              </>
            ) : (
              'Wallet is not connected'
            )}
          </WalletAddressContent>
        </>
      </WalletAddressContainer>
    </>
  );
};

export default AccountContainer;
