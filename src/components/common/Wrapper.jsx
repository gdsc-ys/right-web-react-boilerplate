import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import colors from '../../styles/colors';
import { mobileSize } from '../../styles/size';

function Wrapper({ children }) {
  return <ContainerSpace>{children}</ContainerSpace>;
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Wrapper;

export const ContainerSpace = styled.div`
  width: calc(100vw - 60px);

  margin: 30px;
  box-sizing: border-box;

  overflow: hidden;

  background-color: ${colors.LIGHT};

  display: flex;
  flex-flow: row nowrap;

  @media screen and (max-width: ${mobileSize}px) {
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
  }
`;
