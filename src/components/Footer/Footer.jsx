import { FooterWrap, HomeLinkWrap, LinkList, LinkItem } from './Footer.style';
import { NavLink, useMatch } from 'react-router-dom';
import views from '../../db/views.json';
import iconSVG from '../../svg/setSVG';

const Footer = () => {
  let activeStyle = {
    color: 'palevioletred',
  };

  return (
    <FooterWrap>
      <LinkList>
        {views.map(link => {
          return (
            <LinkItem key={link.v_id} paddingLeft={link.link && 10}>
              {link.link && (
                <NavLink
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  to={link.path}
                >
                  {link.path === '/' ? (
                    <>
                      {iconSVG('icon-home', {
                        width: 13,
                        height: 13,
                        fill: 'grey',
                        hover: 'darkgrey',
                      })}
                    </>
                  ) : (
                    link.title
                  )}
                </NavLink>
              )}
            </LinkItem>
          );
        })}
      </LinkList>
    </FooterWrap>
  );
};

export default Footer;
