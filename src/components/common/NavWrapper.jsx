import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from '../../styles/colors';
import { mobileSize } from '../../styles/size';

function NavWrapper({ children }) {
  return <Space>{children}</Space>;
}

NavWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NavWrapper;

export const Space = styled.nav`
  width: 30%;
  min-width: 400px;

  height: calc(100vh - 50px);

  padding: 10px;
  gap: 10px;

  background-color: ${colors.DARK};

  @media screen and (max-width: ${mobileSize}px) {
    width: calc(100% - 40px);
    min-width: 0;
    // max-width: 400px;
  }
`;
