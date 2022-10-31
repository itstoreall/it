import styled from 'styled-components';

export const FooterWrap = styled.footer`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 40px;
  // background-color: yellowgreen;
`;

export const LinkList = styled.footer`
  display: flex;
`;

export const LinkItem = styled.footer`
  margin-right: 10px;

  &:last-child {
    margin-right: 0;
  }

  > a {
    font-size: 14px;
    color: white;
    text-decoration: none;
    color: white;
  }
`;
