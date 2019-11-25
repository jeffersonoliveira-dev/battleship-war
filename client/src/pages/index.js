import React from 'react';
import Layout from '../components/layout';
import styled from 'styled-components';
import GlobalStyle from '../components/GlobalStyles';

// landing page

const Box = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  min-width: 600px;
  min-height: 400px;
  background-color: white;

  @media only screen and (max-width: 768px) {
    min-width: 80vw;
  }
`;

const IndexPage = () => {
  // create method to handle push to server and return with true or false if the user is identified
  return (
    <Layout>
      <Box></Box>
      <GlobalStyle />
    </Layout>
  );
};

export default IndexPage;
