import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function H3({ children, color }) {
  return <Wrapper color={color}>{children}</Wrapper>;
}

H3.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
};

H3.defaultProps = {
  color: 'black',
};

export default H3;

const Wrapper = styled.h3`
  font-size: 24px;
  line-height: 100%;
  text-align: center;
  font-weight: 800; // Black
  font-family: 'Epilogue';
  font-style: normal;

  color: ${(props) => props.color};
`;
