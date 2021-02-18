import React from 'react';
import "./App.css";
import styled from "styled-components";
import { AccountBox } from "./components/accountBox";
import FrontPage from './FrontPage';

const AppContainer = styled.div`
  width: 100%;
  height: 200vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

function App() {
  
  return (
    <div className="App">
      <AppContainer>
        <FrontPage />
        <div className="form">
          <div className="text">
            <p>Login or Sign Up!</p>
            <span>Design, Develop and influence. Get started now!</span>
          </div>
          <AccountBox />
        </div>
        <div className="footer">
        © 2020-2021 Let's Code
      </div>
      </AppContainer>
    </div>
  );
}

export default App;
