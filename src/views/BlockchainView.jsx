import { useState } from 'react';
import Blockchain from '../components/blockchain/Blockchain';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

const BlockchainView = () => {
  const [blockchain, setBlockchain] = useState(false);

  const viewTitle = 'Blockchain';

  return (
    <div>
      <h1>{viewTitle}</h1>
      <span
        style={{ color: '#282c34', cursor: 'pointer' }}
        onClick={() => setBlockchain(true)}
      >
        blockchain
      </span>
      {blockchain && <Blockchain />}
    </div>
  );
};

export default BlockchainView;
