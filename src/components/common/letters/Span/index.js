import styled from 'styled-components';

const Span = (props) => {
  return <Wrapper {...props}>{props.children}</Wrapper>;
};

export default Span;

const Wrapper = styled.span`
  display: inline;
  font-size: ${(props) => props.size || '24px'};
  line-height: 100%;
  text-align: center;
  font-weight: ${(props) => props.fontWeight || '400'}; // Black
  font-family: 'Epilogue';
  font-style: normal;

  color: ${(props) => props.color || 'black'};
`;
