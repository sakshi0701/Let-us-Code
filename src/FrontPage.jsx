import React from "react";
import './FrontPage.css';
import '../src/App.css';

import styled from "styled-components";
import { AccountBox } from "./components/accountBox";
import Footer from './components/footer/Footer'

const AppContainer = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const FrontPage = () => {

    return (
        <div className="Page">
            <h1>Let's Code.</h1>
            <p>Learning HTML and CSS is a lot more challenging than it used to be. Responsive web design adds more layers of complexity to design and develop websites. Thereby, we present you our resources and platform to pave your way to professionalism.</p>
            <div class="line"></div>
            <div class="parent">
                <div class="boxone">LEARN.</div>
                <div class="boxtwo">CODE.</div>
                <div class="boxthree">EXPLORE.</div>
            </div>

            <AppContainer>
                <div className="form">
                    <div className="text">
                        <p>Login or Sign Up!</p>
                        <span>Design, Develop and influence. Get started now!</span>
                    </div>
                    <AccountBox />
                </div>

            </AppContainer>
            <Footer />
        </div>
    )
}

export default FrontPage;