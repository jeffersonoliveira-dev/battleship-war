import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div``;
// flex
const Dashboard: React.FC = () => {
  return (
    <Container>
      <div>
        <button>
          <Link to="/game">game</Link>{" "}
        </button>
        <button>
          <Link to="/ranking">score</Link>{" "}
        </button>
      </div>
    </Container>
  );
};

export default Dashboard;
