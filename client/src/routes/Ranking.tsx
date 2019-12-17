import * as React from "react";
import styled from "styled-components";
import socketIOClient from "socket.io-client";
// need to install websocket to display ranking in real time

export const Container = styled.div``;

const Score: React.FC = () => {
  // const socket = socketIOClient('http://localhost:5000');
  //   socket.on('connect', function(){});

  return (
    <Container>
      <h1>Score</h1>
    </Container>
  );
};

export default Score;
