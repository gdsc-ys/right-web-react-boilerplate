import './App.css';

import React from 'react';

// import Header from './components/common/Header';
import Wrapper from './components/common/Wrapper';
import NavWrapper from './components/common/NavWrapper';
import PageWrapper from './components/common/PageWrapper';
import TestPage from './pages/Test';

function App() {
  return (
    <Wrapper>
      <NavWrapper />
      <PageWrapper>
        <TestPage />
      </PageWrapper>
    </Wrapper>
  );
}

export default App;
