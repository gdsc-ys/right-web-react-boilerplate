import './App.css';

import React from 'react';

import Header from './common/Header';
import Wrapper from './common/Wrapper';
import NavWrapper from './common/NavWrapper';
import PageWrapper from './common/PageWrapper';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <>
      <Header></Header>
      <Wrapper>
        <NavWrapper></NavWrapper>
        <PageWrapper></PageWrapper>
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
