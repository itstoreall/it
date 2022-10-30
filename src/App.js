import { useState } from 'react';
import logo from './img/logo.svg';
import './App.css';
import Blockchain from './components/blockchain/Blockchain';

function App() {
  const [blockchain, setBlockchain] = useState(false);

  return (
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
  );
}

export default App;
