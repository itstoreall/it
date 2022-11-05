import styled from 'styled-components';

export const FooterWrap = styled.footer`
  position: fixed;
  bottom: 0;
  min-height: 40px;
`;

export const HomeLinkWrap = styled.div`
  display: flex;
`;

export const LinkList = styled.ul`
  display: flex;
`;

export const LinkItem = styled.li`
  display: flex;
  padding-left: 10px;

  &:first-child {
    padding-left: 0;
  }

  > a {
    display: flex;
    align-items: center;
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

    > svg {
      width: 13px;
      height: 13px;
      fill: grey;

      &:hover {
        fill: darkgrey;
      }
    }
  }
`;
