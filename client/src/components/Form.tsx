import * as React from "react";
import styled from "styled-components";
import { RouteComponentProps, withRouter } from "react-router-dom";

const FormBox = styled.form`
  width: 100%;
  height: 100%;
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
    <>
      <FormBox>
        <label>nickname:</label>
        <input type="text" name="nick" id="nick" />
        <label>password:</label>
        <input type="password" name="password" id="pass" />
        <input type="submit" value="log in" onClick={sendForm} />
      </FormBox>
    </>
  );
};

export default withRouter(Form);
