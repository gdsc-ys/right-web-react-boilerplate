import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function H2({ children, color }) {
  return <Wrapper color={color}>{children}</Wrapper>;
}

H2.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
};

H2.defaultProps = {
  color: 'black',
};

export default H2;

const Wrapper = styled.h2`
  font-size: 36px;
  line-height: 100%;
  text-align: center;
  font-weight: 800; // Black
  font-family: 'Epilogue';
  font-style: normal;

  color: ${(props) => props.color};
`;
