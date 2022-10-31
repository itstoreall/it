import { FooterWrap, LinkList, LinkItem } from './Footer.style';
import { NavLink } from 'react-router-dom';
import views from '../../db/views.json';

const Footer = () => {
  console.log('Footer', views);

  let activeStyle = {
    color: 'green',
  };

  return (
    <FooterWrap>
      <LinkList>
        {views.map(link => {
          return (
            <LinkItem key={link.title}>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to={link.path}
              >
                {link.title}
              </NavLink>
            </LinkItem>
          );
        })}
      </LinkList>
    </FooterWrap>
  );
};

export default Footer;
