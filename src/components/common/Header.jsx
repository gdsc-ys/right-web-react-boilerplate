import React from 'react';
import styled from 'styled-components';

function Header() {
  return <Space />;
}
export default Header;

export const Space = styled.header`
  width: 100vw;
  height: 30px;
  display: flex;
  justify-content: flex-end;
  background-color: red;
`;
