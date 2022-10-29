import React from 'react';
import styled from 'styled-components';
import colors from '../../styles/colors';

function Button(props) {
  return (
    <Box {...props} onClick={props.onClick}>
      {props.children}
    </Box>
  );
}
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
