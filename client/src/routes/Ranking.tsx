import * as React from "react";
import styled from "styled-components";
import socketIOClient from "socket.io-client";
import Score from "../components/Score";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 100%;
  width: 100%;
`;

const Display = styled.div`
  position: relative;
  top: 10vh;
  text-align: center;
  width: 50%;
  padding: 0.5rem;
  margin: 0 auto;
  background-color: skyblue;
  height: 75vh;
`;

const BlockHeader = styled.div``;

const Block = styled.div`
  height: 60vh;
  width: 80%;
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);
`;

const List = styled.li`
  list-style: none;
`;

const Ranking: React.FC = () => {
  // useState to store rankings
  // get rankings and number , maybe ?
  React.useEffect(() => {
    const socket = socketIOClient("http://localhost:5000");
    socket.on("message", (data: any) => {
      console.log(data);
    });
  }, []);

  return (
    <Container>
      <Display>
        <BlockHeader>
          <Link to="/dashboard">dashboard</Link>
        </BlockHeader>
        <Block>
          <ul>
            <List>
              <Score />
              <Score />
              <Score />
              <Score />
              <Score />
            </List>
          </ul>
        </Block>
        <div> your position is </div>
      </Display>
    </Container>
  );
};

export default Ranking;
