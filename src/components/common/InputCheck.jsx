import React from 'react'
import styled from 'styled-components'
import colors from '../../styles/colors'

const InputCheck = () => {
    return (
        <InputArea>
            <LabelText>{}</LabelText>
            <InputBox />
            <WarningText>{}</WarningText>
        </InputArea>
    )
}

const InputArea = styled.div`
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

export default InputCheck