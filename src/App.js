import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomeView from './views/HomeView';
import BlockchainView from './views/BlockchainView';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeView />} />
        <Route path='/blockchain' element={<BlockchainView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

/*

<div className='App'>
  <header className='App-header'>
    <img src={logo} className='App-logo' alt='React' />
    <p>it.storeall.com.ua in progress...</p>
    <span
      style={{ color: '#282c34', cursor: 'pointer' }}
      onClick={() => setBlockchain(true)}
    >
      blockchain
    </span>
    {blockchain && <Blockchain />}
  </header>
</div>

*/
