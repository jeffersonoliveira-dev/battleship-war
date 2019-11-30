import React from 'react';
import './App.css';
import styled from 'styled-components';
import GlobalStyles from './components/GlobalStyles'


export const Container = styled.div`
height: 100%;
width: 100%;
position: relative;

`;


const App: React.FC = () => {
  return (
    <div>
       <h1>testing</h1>
      <GlobalStyles/>
     </div>
  );
}

export default App;
