import styled from 'styled-components';

const H3 = (props) => {
  return <Wrapper {...props}>{props.children}</Wrapper>;
};

export default H3;

const Wrapper = styled.h3`
  font-size: 24px;
  line-height: 100%;
  text-align: center;
  font-weight: 800; // Black
  font-family: 'Epilogue';
  font-style: normal;

  color: ${(props) => props.color || 'black'};
`;
