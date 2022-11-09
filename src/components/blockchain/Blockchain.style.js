import styled from 'styled-components';

export const BlockchainSection = styled.div`
  padding: 40px;
`;

export const StyleButton = styled.button`
  display: ${props => props.display || 'flex'};
  justify-content: ${props => props.justifyContent || 'center'};
  align-items: ${props => props.alignItems || 'center'};
  padding ${props => props.padding || 0};
  margin ${props => props.margin || 0};
  width: ${props => props.width || 40}px;
  height: ${props => props.height || 40}px;
  background-color: ${props => props.background || 'transparent'};
  border: ${props => props.border || 'none'};
  cursor: pointer;
`;

export const DefaultButton = styled.button`
  padding 3px 6px;
  font-weight: 600;
  color: palevioletred;
  background-color: transparent;
  border: 2px solid palevioletred;
  border-radius: 4px;
  cursor: pointer;
`;
