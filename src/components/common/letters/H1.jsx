import styled from 'styled-components';

const H1 = (props) => {
  return <Wrapper {...props}>{props.children}</Wrapper>;
};

export default H1;

const Wrapper = styled.h1`
  font-size: 48px;
  line-height: 100%;
  text-align: center;
  font-weight: 800; // Black
  font-family: 'Epilogue';
  font-style: normal;

  color: ${(props) => props.color || 'black'};
`;
