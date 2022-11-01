import { HomeSection } from './Home.style';
import logo from '../../img/logo.svg';

const Home = () => {
  return (
    <HomeSection>
      <img src={logo} alt='storeall' />
      <p>it.storeall.com.ua in progress...</p>
    </HomeSection>
  );
};

export default Home;
