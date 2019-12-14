import React from "react";
import styled from "styled-components";
import Form from "../components/Form";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  background-color: blue;
`;

export const Title = styled.div`
  width: 50%;
  margin: 0 auto;
  text-align: center;
  position: relative;
  top: 20px;
`;

export const Box = styled.div`
  background-color: white;
  height: 400px;
  width: 50vw;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, 30%);

  @media (max-width: 768px) {
    width: 90vw;
  }
`;

const Home: React.FC = () => {
  return (
    <Container>
      <Title>Battleship War</Title>
      <Box>
        <Form />
      </Box>
    </Container>
  );
};

export default Home;
