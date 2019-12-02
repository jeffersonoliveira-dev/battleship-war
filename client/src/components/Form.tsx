import * as React from 'react';
import styled from 'styled-components'

const FormBox = styled.form`
  width: 100%;
  height: 100%;
`

interface IFormProps {

}

const Form: React.FC<IFormProps> = (props) => {
  const [ state, setState ] = React.useState({
    //
  })
  // useState to register nick and password and send via fetch

  const sendForm = (obj: typeof state) => {
    //  fetch
  }

  return (

    <>
    <FormBox>
    <label>
    nickname:
      <input type="text" name="name" />
    </label>
        <label>
    password:
      <input type="text" name="password" />
    </label>

    <input type="submit" value="log in" onClick={sendForm} />
    </FormBox>
    </>
  )
};

export default Form;

