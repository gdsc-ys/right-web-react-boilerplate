import React from 'react';
import styled from 'styled-components';
import { mobileSize } from '../../../styles/size';

function Header() {
  return (
    <Space>
      <div>
        <NaviButton>
          <svg
            width="18"
            height="12"
            viewBox="0 0 18 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 12H18V10H0V12ZM0 7H18V5H0V7ZM0 0V2H18V0H0Z" fill="#323232" />
          </svg>
        </NaviButton>
      </div>
      <div>
        <HeaderButton>Sign in/</HeaderButton>
        <HeaderButton>Sign up</HeaderButton>
      </div>
    </Space>
  );
}
export default Header;

const Space = styled.header`
  width: 100%;
  height: 30px;
  padding: 5px 20px;

  display: flex;
  justify-content: space-between;

  box-sizing: border-box;
`;

const HeaderButton = styled.header`
  display: inline;
  font-size: 12px;
  &:hover {
    cursor: pointer;
  }
`;
const NaviButton = styled.header`
  width: 100%;
  height: 100%;
  display: none;

  @media screen and (max-width: ${mobileSize}px) {
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      cursor: pointer;
    }
  }
`;
