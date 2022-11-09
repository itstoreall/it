import styled from 'styled-components';
import { DefaultButton } from '../Blockchain.style';

export const Section = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px;
  color: white;
  border-radius: 8px;
`;

export const SectionButton = styled(DefaultButton)`
  color: white;
  border-color: white;
`;
