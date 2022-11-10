import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from '../../../styles/colors';
import { mobileSize } from '../../../styles/size';

function NavWrapper({ children }) {
  return <Space>{children}</Space>;
}

NavWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NavWrapper;

export const Space = styled.nav`
  width: 300px;
  height: 100%;

  background-color: ${colors.DARK};

  @media screen and (max-width: ${mobileSize}px) {
    width: 80%;
    max-width: 300px;
    position: fixed;
    opacity: 80%;

    box-sizing: border-box;
  }
`;
