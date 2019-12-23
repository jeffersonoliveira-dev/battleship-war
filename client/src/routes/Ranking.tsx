import * as React from "react";
import styled from "styled-components";
import socketIOClient from "socket.io-client";
import { Link } from "react-router-dom";
import Score from "../components/Ranking/Score";

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
  const [ranking, setRanking] = React.useState<Object[] | []>([]);

  let scores: any = [];

  React.useEffect(() => {
    const socket = socketIOClient("http://localhost:5000");
    socket.on("message", (data: Object[]) => {
      data.map((score: any, index: any) => {
        scores.push(<Score />);
      });

      setRanking(scores);
    });
  }, []);

  // return  a list with the scores till 10 probably

  console.log(ranking);

  return (
    <Container>
      <Display>
        <BlockHeader>
          <Link to="/dashboard">dashboard</Link>
        </BlockHeader>
        <Block>
          <ul>
            <List>{ranking}</List>
          </ul>
        </Block>
        <div> your position is </div>
      </Display>
    </Container>
  );
};

export default Ranking;
