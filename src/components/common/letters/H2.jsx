import styled from 'styled-components';

const H2 = (props) => {
  return <Wrapper {...props}>{props.children}</Wrapper>;
};

export default H2;

const Wrapper = styled.h2`
  font-size: 36px;
  line-height: 100%;
  text-align: center;
  font-weight: 800; // Black
  font-family: 'Epilogue';
  font-style: normal;

  color: ${(props) => props.color || 'black'};
`;
