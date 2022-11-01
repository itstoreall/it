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

export const HomeLinkWrap = styled.div`
  display: flex;

  > a {
    > svg {
      &:hover {
        fill: darkgrey;
      }
    }
  }
`;

export const LinkList = styled.ul`
  display: flex;
`;

export const LinkItem = styled.li`
  // background-color: yellowgreen;

  > a {
    display: block;
    padding-left: 10px;
    font-size: 14px;
    color: white;
    text-decoration: none;
    color: grey;

    &:last-child {
      margin-right: 0;
    }

    &:hover {
      color: darkgrey;
    }
  }
`;
