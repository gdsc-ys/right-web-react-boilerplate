import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function H1({ children, color }) {
  return <Wrapper color={color}>{children}</Wrapper>;
}

H1.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
};

H1.defaultProps = {
  color: 'black',
};

export default H1;

const Wrapper = styled.h1`
  font-size: 48px;
  line-height: 100%;
  text-align: center;
  font-weight: 800; // Black
  font-family: 'Epilogue';
  font-style: normal;

  color: ${(props) => props.color};
`;
