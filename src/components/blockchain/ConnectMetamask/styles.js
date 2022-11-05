import styled from 'styled-components';
import { ReactComponent as Copy } from './icons/copy.svg';
import { ReactComponent as CopySuccess } from './icons/successCopy.svg';

export const WalletAddressContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const WalletAddressContent = styled.div`
  // height: 100px;
  margin-bottom: 10px;
  // background-color: teal;

  // font-size: 14px;
  // font-weight: 600;
`;

export const CopyIcon = styled(Copy)`
  width: 14px;
  height: 14px;
  cursor: pointer;
`;

export const CopySuccessIcon = styled(CopySuccess)`
  width: 14px;
  height: 14px;
  cursor: pointer;
`;

export const BurgerIconContainer = styled.div`
  height: 30px;
  width: 30px;
  display: inline-flex;
  align-items: center;
`;
