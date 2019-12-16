import React from "react";
import { Link } from "react-router-dom";
// import styled from "styled-components";

const Dashboard: React.FC = () => {
  return (
    <>
      <div>
        <button>
          <Link to="/game">game</Link>{" "}
        </button>
        <button>
          <Link to="/score">score</Link>{" "}
        </button>
      </div>
    </>
  );
};

export default Dashboard;
