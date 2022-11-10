import styled from 'styled-components';
import { DefaultButton } from '../Blockchain.style';
import refs from '../../../styles/refs';

export const Section = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  color: white;
  background: ${refs.blockchainSectionBg};
  border-radius: 8px;
`;

export const SectionButton = styled(DefaultButton)`
  color: ${props => (props.disabled ? 'grey' : 'white')};
  border-color: ${props => (props.disabled ? 'grey' : 'white')};
`;
