import * as React from 'react';
import styled from 'styled-components'

const FormBox = styled.form`
  width: 100%;
  height: 100%;
`

interface IFormProps {
}


const Form: React.FC<IFormProps> = (props) => {
  const sendForm = (event: any) => {
    event.preventDefault() ;
    let nickname = (document.getElementById('nick') as HTMLInputElement).value;
    let password = (document.getElementById('pass') as HTMLInputElement).value;

    fetch('http://localhost:5000/api/', { method: 'POST' }).then(response => console.log(response))
  }

  return (
    <>
    <FormBox>
    <label>
    nickname:
    </label>
      <input type="text" name="nick" id="nick"/>
    <label>
    password:
    </label>
      <input type="password" name="password" id="pass"/>

    <input type="submit" value="log in" onClick={sendForm} />
    </FormBox>
    </>
  )
};

export default Form;

