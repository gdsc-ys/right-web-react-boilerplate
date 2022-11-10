import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function Wrapper({ children }) {
  return <ContainerSpace>{children}</ContainerSpace>;
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Wrapper;

export const ContainerSpace = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;
