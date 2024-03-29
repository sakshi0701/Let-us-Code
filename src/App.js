import React from 'react';
import FrontPage from './FrontPage';
import { AuthProvider } from "./contexts/AuthContext"
import { Dashboard } from './components/Dashboard';
import { UpdateProfile } from "./components/UpdateProfile";
import { ForgotPassword } from "./components/ForgotPassword";
import { Code } from './components/editor/Code'
import PrivateRoute from './components/PrivateRoute';
import { BrowserRouter as Router, Route } from "react-router-dom"
import Resources from './components/resources/Resources';

// import Footer from './components/footer/Footer'

// const AppContainer = styled.div`
//   width: 100%;
//   height: 200vh;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: space-between;
// `;

function App() {

  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <PrivateRoute path="/dash" component={Dashboard} />
          <PrivateRoute path="/update-profile" component={UpdateProfile} />
          <PrivateRoute path="/code" component={Code} />
          <PrivateRoute path="/resources" component={Resources} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <FrontPage />
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
