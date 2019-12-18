import * as React from "react";
import styled from "styled-components";

const Block = styled.div`
  background-color: white;
  height: 12vh;
  margin: 5px;
`;

const UserScore = styled.div``;

const Score: React.FC = () => {
  return (
    <Block>
      <UserScore>#1 20</UserScore>
    </Block>
  );
};

export default Score;
