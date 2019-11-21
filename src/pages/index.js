import React from "react"
import Layout from "../components/layout"
import styled from 'styled-components'
import GlobalStyle from '../components/GlobalStyles'

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
`


const IndexPage = () => (
  <Layout>
    <Box>
    </Box>
    <GlobalStyle/>
  </Layout>
)

export default IndexPage
