import { HomeSection } from './Home.style';
import logo from '../../img/logo.svg';

const Home = () => {
  return (
    <HomeSection>
      <img
        src={logo}
        style={{
          marginBottom: '5px',
          width: '100%',
          maxHeight: '70px',
          maxWidth: '193px',
        }}
        alt='storeall'
      />
      <p style={{ margin: 0 }}>it.storeall.com.ua in progress...</p>
    </HomeSection>
  );
};

export default Home;
