import { FooterWrap, HomeLinkWrap, LinkList, LinkItem } from './Footer.style';
import { NavLink, useMatch } from 'react-router-dom';
import views from '../../db/views.json';
import sprite from '../../svg/sprite.svg';

const Footer = () => {
  let activeStyle = {
    color: 'palevioletred',
  };

  function SomeComp() {
    const match = useMatch('/blockchain');
    match && console.log(1, match);
    console.log(2, match);
    // return <li className={Boolean(match) ? 'active' : ''} />;
  }

  // SomeComp();

  return (
    <FooterWrap>
      <HomeLinkWrap>
        <NavLink to={'/'}>
          <svg width='12' height='12' fill='grey'>
            <use href={sprite + '#icon-home'}></use>
          </svg>
        </NavLink>
      </HomeLinkWrap>
      <LinkList>
        {views.map(link => {
          return (
            <LinkItem key={link.v_id}>
              {link.link && (
                <NavLink
                  key={link.title}
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  to={link.path}
                >
                  {link.title}
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
