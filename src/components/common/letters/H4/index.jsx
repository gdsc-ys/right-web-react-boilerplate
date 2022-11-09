import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function H4({ children, color }) {
  return <Wrapper color={color}>{children}</Wrapper>;
}

H4.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
};

H4.defaultProps = {
  color: 'black',
};

export default H4;

const Wrapper = styled.h4`
  font-size: 24px;
  line-height: 100%;
  text-align: center;
  font-weight: 600; // Black
  font-family: 'Epilogue';
  font-style: normal;

  color: ${(props) => props.color};
`;
