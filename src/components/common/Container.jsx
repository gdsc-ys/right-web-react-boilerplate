import React from 'react';
import styled from 'styled-components';
import colors from '../../styles/colors';

function Container(props) {
  return <ContainerSpace>{props.children}</ContainerSpace>;
}
export default Container;

export const ContainerSpace = styled.div`
  width: 33%;
  max-width: 500px;
  box-sizing: border-box;

  padding: 10px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-flow: column nowrap;
  border: solid 1px;
  background-color: ${colors.DARK};
`;
