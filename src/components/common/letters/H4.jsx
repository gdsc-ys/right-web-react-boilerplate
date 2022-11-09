import styled from 'styled-components';

const H4 = (props) => {
  return <Wrapper {...props}>{props.children}</Wrapper>;
};

export default H4;

const Wrapper = styled.h4`
  font-size: 24px;
  line-height: 100%;
  text-align: center;
  font-weight: 600; // Black
  font-family: 'Epilogue';
  font-style: normal;

  color: ${(props) => props.color || 'black'};
`;
