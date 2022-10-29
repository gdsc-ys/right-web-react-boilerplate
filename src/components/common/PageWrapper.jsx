import React from 'react';
import styled from 'styled-components';
import colors from '../../styles/colors';
import { mobileSize } from '../../styles/size';

function PageWrapper(props) {
  return <Space>{props.children}asdfasdfasfasdfasdfasdfasdfasdfasdfadsfasdfasdfasdfasdf</Space>;
}
export default PageWrapper;

export const Space = styled.main`
  width: 70%;
  min-width: 400px;
  height: calc(100vh - 50px);

  padding: 10px;
  gap: 10px;

  @media screen and (max-width: ${mobileSize}px) {
    width: calc(100% - 40px);
    // max-width: 400px;
  }
`;
