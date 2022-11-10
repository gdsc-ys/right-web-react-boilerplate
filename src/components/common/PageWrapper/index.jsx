import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { mobileSize } from '../../../styles/size';

import Header from '../Header';

function PageWrapper({ children }) {
  return (
    <Space>
      <Header />
      <Page>{children}</Page>
    </Space>
  );
}

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageWrapper;

const Space = styled.main`
  width: calc(100vw - 300px);
  height: calc(100% - 30px);

  box-sizing: border-box;

  @media screen and (max-width: ${mobileSize}px) {
    width: 100%;
  }
`;

const Page = styled.main`
  width: 100%;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
`;
