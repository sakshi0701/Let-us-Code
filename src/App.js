import React from 'react';
import "./App.css";
import styled from "styled-components";
import { AccountBox } from "./components/accountBox";
import FrontPage from './FrontPage';
import { AuthProvider } from "./contexts/AuthContext"
import { Dashboard } from './components/Dashboard';
import { UpdateProfile } from "./components/UpdateProfile";
import { ForgotPassword } from "./components/ForgotPassword";
import PrivateRoute from './components/PrivateRoute';
import { BrowserRouter as Router, Route } from "react-router-dom"

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
      <Router>
          <AuthProvider>
            <PrivateRoute path="/dash" component={Dashboard} />
            <PrivateRoute path="/update-profile" component={UpdateProfile} />
            <Route path="/forgot-password" component={ForgotPassword} />
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
          </AuthProvider>
        </Router>
    </div>
  );
}

export default App;
