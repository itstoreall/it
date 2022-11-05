import styled from 'styled-components';

export const BlockchainSection = styled.div`
  padding: 40px;
`;

export const StyleButton = styled.button`
  padding ${props => props.padding || 0};
  margin ${props => props.margin || 0};
  background-color: ${props => props.background || 'transparent'};
  border: ${props => props.border || 0};
  cursor: pointer;
`;

export const DefaultButton = styled.button`
  padding 3px 6px;
  color: palevioletred;
  background-color: transparent;
  border: 1px solid palevioletred;
  border-radius: 4px;
  cursor: pointer;
`;
