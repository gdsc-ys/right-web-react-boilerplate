import './App.css';

import React from 'react';

import Header from './components/common/Header';
import Wrapper from './components/common/Wrapper';
import NavWrapper from './components/common/NavWrapper';
import PageWrapper from './components/common/PageWrapper';

function App() {
  return (
    <>
      <Header />
      <Wrapper>
        <NavWrapper />
        <PageWrapper />
        {/* <TestPage></TestPage> */}
        {/* <Router>
        <Routes>
          <Route path="/google" element={<BoardPage />} />
          <Route path="/developer" element={<WritePage />} />
          <Route path="/student" element={<WritePage />} />
          <Route path="/club" element={<WritePage />} />

          <Route path="/sign" element={<LoginPage />} />
          <Route path="/setting" element={<RegisterPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router> */}
      </Wrapper>
    </>
  );
}

export default App;
