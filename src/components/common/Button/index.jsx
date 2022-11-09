import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from '../../../styles/colors';

function Button({ children, width, maxwidth, height, size, onClick }) {
  return (
    <Box width={width} maxwidth={maxwidth} height={height} size={size} onClick={onClick}>
      {children}
    </Box>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.string,
  maxwidth: PropTypes.number || PropTypes.string,
  height: PropTypes.number || PropTypes.string,
  size: PropTypes.number || PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  width: '80%',
  maxwidth: '300px',
  height: '50px',
  size: '1em',
  onClick: () => {},
};

export default Button;

const Box = styled.button`
  font-family: 'Epilogue';
  width: ${(props) => props.width || '80%'};
  max-width: ${(props) => props.maxwidth || '300px'};
  height: ${(props) => props.height || '50px'};
  border: none;
  background-color: ${colors.BLACK};
  color: ${colors.WHITE};
  font-weight: bold;
  font-size: ${(props) => props.size || '1em'};
  cursor: pointer;
  transform-origin: top left;
  &:hover {
    font-style: italic;
  }
  &:active {
    opacity: 0.6;
  }
`;
