import * as React from "react";
import styled from "styled-components";
import { RouteComponentProps, withRouter } from "react-router-dom";

const Container = styled.div`
  height: 100%;
  width: 100%;
`;

const FormBox = styled.form`
  margin-top: 20vh;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Item = styled.div`
  justify-content: center;
  margin: 5px;
`;

const Form: React.FC<RouteComponentProps> = props => {
  const sendForm = (event: any) => {
    event.preventDefault();
    let nickname = (document.getElementById("nick") as HTMLInputElement).value;
    let password = (document.getElementById("pass") as HTMLInputElement).value;

    fetch("http://localhost:5000/user/login", {
      method: "post",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ nickname: nickname, password: password })
    })
      .then(response => response.json())
      .then(result => {
        if (result) {
          props.history.push("/dashboard");
        } else {
          // alert that nick already exist or password is wrong
        }
      });
  };

  return (
    <Container>
      <FormBox>
        <Item>
          <label>nickname:</label>
          <input type="text" name="nick" id="nick" />
        </Item>
        <Item>
          <label>password:</label>
          <input type="password" name="password" id="pass" />
        </Item>
        <Item>
          <input type="submit" value="log in" onClick={sendForm} />
        </Item>
      </FormBox>
    </Container>
  );
};

export default withRouter(Form);
