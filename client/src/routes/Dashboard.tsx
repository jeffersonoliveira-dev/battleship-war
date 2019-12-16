import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  justify-content: center;
  height: 100%;
  width: 100%;
`;
// flex
const Button = styled.button`
  background-color: white;
  padding: 20px;
  margin: 10px;
  color: blue;
`;

const Display = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Display>
        <Button>
          <Link to="/game">game</Link>{" "}
        </Button>
        <Button>
          <Link to="/ranking">score</Link>{" "}
        </Button>
      </Display>
    </Container>
  );
};

export default Dashboard;
