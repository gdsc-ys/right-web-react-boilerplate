import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function Span({ children, color, fontWeight, size }) {
  return (
    <Wrapper color={color} fontWeight={fontWeight} size={size}>
      {children}
    </Wrapper>
  );
}

Span.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  fontWeight: PropTypes.string || PropTypes.number,
  size: PropTypes.string || PropTypes.number,
};

Span.defaultProps = {
  color: 'black',
  fontWeight: '400',
  size: '24px',
};

export default Span;

const Wrapper = styled.span`
  display: inline;
  font-size: ${(props) => `${props.size}`};
  line-height: 100%;
  text-align: center;
  font-weight: ${(props) => `${props.fontWeight}`}; // Black
  font-family: 'Epilogue';
  font-style: normal;

  color: ${(props) => props.color};
`;
