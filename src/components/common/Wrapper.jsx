import React from 'react';
import styled from 'styled-components';
import colors from '../../styles/colors';
import { mobileSize } from '../../styles/size';

function Wrapper(props) {
  return <ContainerSpace>{props.children}</ContainerSpace>;
}
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
