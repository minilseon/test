import React from 'react'

import styled, {keyframes} from 'styled-components'
// npm i styled-components 설치

export default function StyledComponent() {

  const Wrap = styled.section`
    background: #ccc;
    // width: 800px;
    width: ${(props) => props.width};
    // width: ${(props) => props.width || '1280px'};
    height: 200px;
    margin: 0 auto;
  `
  const Title = styled.h1`
    text-align: center;
    font-size: 24px;
    line-height: 200px;
    // color: blue;
    // color: ${(props) => props.color || 'blue'};
    color: ${(props) => props.blue ? 'blue' : 'green'};
  `
  const Button = styled.button`
    width: 150px;
    height: 50px;
    font-size: 18px;
    border-radius: 10px;
    background-color: yellow;
    &:hover {
      background-color: black;
      color: white;
    }
  `
  const FirstButton = styled(Button)`
    background-color: red;
  `
  const Input = styled.input`
    border-radius: 10px;
    width: 150px;
    height: 30px;
    // color: blue;
    color: ${(props) => props.inputColor || 'blue'};
    margin: 5px;
  `
  const InputText = styled.input.attrs((props) => ({type: 'text', placeholder: 'input_two'}))`
    color: green;
  `
  const rotate = keyframes`
    0% {transform: rotate(0deg)}
    100% {transform: rotate(360deg)}
  `
  const Rotate = styled.div`
    display: inline-block;
    font-size: 50px;
    animation: ${rotate} 1s infinite linear;
  `


  return (
    <div>
      
      <h1>Styled component</h1>
      <Wrap width='100%'>
        <Title blue>Front_End</Title>
      </Wrap>
      <Wrap>
        <Title>Developer</Title>
      </Wrap>
      <Button>Default Button</Button>
      <FirstButton>First Button</FirstButton>
      <br/>
      <Input type='text' placeholder='input_one' inputColor='red' />
      <Input type='password' />
      <InputText />
      <br/>
      <Rotate>*</Rotate>

    </div>
  )
}
