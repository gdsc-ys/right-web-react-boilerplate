import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import colors from '../../../styles/colors';

function Input({ source, type, title }) {
  const [warningText, setWarningText] = useState('');

  const checkID = (inputText) => {
    const regExp = /^[a-z]+[a-z0-9]{5,19}$/g;
    if (regExp.test(inputText)) {
      setWarningText('');
    } else {
      setWarningText('아이디를 똑바로 입력하여라');
    }
  };

  const checkEmail = (inputText) => {
    // eslint-disable-next-line
    const regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    if (regExp.test(inputText)) {
      setWarningText('');
    } else {
      setWarningText('이메일을 똑바로 입력하여라');
    }
  };

  const checkPassword = (inputText) => {
    const regExp = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;
    if (regExp.test(inputText)) {
      setWarningText('');
    } else {
      setWarningText('패스워드를 똑바로 입력하여라');
    }
  };

  const onChangeText = (e) => {
    const inputText = e.target.value;
    switch (source) {
      case 'ID':
        checkID(inputText);
        break;
      case 'Email':
        checkEmail(inputText);
        break;
      case 'Password':
        checkPassword(inputText);
        break;
      default:
      // block if none of cases matched
    }
  };

  return (
    <InputArea>
      <LabelText>{title}</LabelText>
      <InputBox type={type} onChange={onChangeText} />
      <WarningText>{warningText}</WarningText>
    </InputArea>
  );
}

Input.propTypes = {
  source: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Input;

const InputArea = styled.form`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

const LabelText = styled.div`
  font-family: 'Epilogue';
  font-size: 30px;
  font-weight: 900;
  color: ${colors.BLACK};
  margin: 0 0 10px 0;
`;

const InputBox = styled.input`
  width: 440px;
  height: 50px;
  border: 10px solid ${colors.BLACK};
  font-family: 'Epilogue';
  color: ${colors.BLACK};
  margin: 0 0 10px 0;

`;

const WarningText = styled.div`
  font-family: 'Epilogue';
  font-weight: 600;
  color: ${colors.RED};
  font-size: 20px;
  margin-bottom: 20px;
`;
