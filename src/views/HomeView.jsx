import logo from '../img/logo.svg';

const HomeView = () => {
  const viewTitle = 'Home';

  return (
    <>
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='React' />
          <p>it.storeall.com.ua in progress...</p>
        </header>
      </div>
    </>
  );
};

export default HomeView;
