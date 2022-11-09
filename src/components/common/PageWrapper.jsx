import React from 'react';
import styled from 'styled-components';
import { mobileSize } from '../../styles/size';
import H1 from './letters/H1';
import H2 from './letters/H2';
import H3 from './letters/H3';
import H4 from './letters/H4';
import Span from './letters/Span';

function PageWrapper() {
  return (
    <Space>
      <H1>H1 Test</H1>
      <H2>H2 Test</H2>
      <H3>H3 Test</H3>
      <H4>H4 Test</H4>
      <Span>Span Test</Span>
    </Space>
  );
}
export default PageWrapper;

export const Space = styled.main`
  width: 70%;
  min-width: 400px;
  height: calc(100vh - 50px);

  padding: 10px;
  gap: 10px;

  @media screen and (max-width: ${mobileSize}px) {
    width: calc(100% - 40px);
    // max-width: 400px;
  }
`;
