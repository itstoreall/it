import { useState } from 'react';
import { ViewWrap } from '../View.style';
import Blockchain from '../../components/Blockchain/Blockchain';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

const BlockchainView = () => {
  const viewTitle = 'Blockchain';

  return (
    <ViewWrap>
      <h1>{viewTitle}</h1>
      <Blockchain />
    </ViewWrap>
  );
};

export default BlockchainView;
