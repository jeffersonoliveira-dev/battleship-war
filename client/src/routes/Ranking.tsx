import * as React from "react";

import styled from "styled-components";

import socketIOClient from "socket.io-client";
// need to install websocket to display ranking in real time

export const Container = styled.div``;

export const Display = styled.div``;

export const List = styled.li``;

export const Block = styled.div``;

export const Score = styled.div``;

//

const Ranking: React.FC = () => {
  React.useEffect(() => {
    const socket = socketIOClient("http://localhost:5000");
    socket.on("connect", function() {
      console.log("websocket from client connected");
    });
  });

  return (
    <Container>
      <h1>Ranking</h1>
      <Display>
        <ul>
          <List>
            <Block>
              <Score></Score>
            </Block>
          </List>
        </ul>
      </Display>
    </Container>
  );
};

export default Ranking;
