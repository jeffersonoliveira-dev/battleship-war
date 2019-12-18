import * as React from "react";
import styled from "styled-components";
import socketIOClient from "socket.io-client";
import Score from "../components/Score";

const Container = styled.div`
  height: 100%;
  width: 100%;
`;

const Display = styled.div`
  position: relative;
  top: 10vh;
  text-align: center;
  width: 70%;
  padding: 0.5rem;
  margin: 0 auto;
  background-color: skyblue;
  height: 70vh;
`;

const Block = styled.div`
  height: 60vh;
  width: 80%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const List = styled.li`
  list-style: none;
`;

const Ranking: React.FC = () => {
  // useState to store rankings
  React.useEffect(() => {
    const socket = socketIOClient("http://localhost:5000");
    socket.on("connect", function() {
      console.log("websocket from client connected");
    });
  }, []);

  return (
    <Container>
      <Display>
        <Block>
          <ul>
            <List>
              <Score />
              <Score />
              <Score />
              <Score />
              <Score />
              <Score />
              <Score />
              <Score />
              <Score />
              <Score />
            </List>
          </ul>
        </Block>
      </Display>
    </Container>
  );
};

export default Ranking;
