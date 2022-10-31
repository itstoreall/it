import { ViewWrap } from '../View.style';
import Home from '../../components/Home';

const HomeView = () => {
  const viewTitle = 'Home';

  return (
    <>
      <ViewWrap>
        <Home />
        {/* <header className='App-header'>
          <img src={logo} className='App-logo' alt='React' />
          <p>it.storeall.com.ua in progress...</p>
        </header> */}
      </ViewWrap>
    </>
  );
};

export default HomeView;
