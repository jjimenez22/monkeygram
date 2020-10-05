import React, {Fragment} from 'react';
import Header from "./header";
import Nav from "./nav";
import MainContainer from "./main/main.container";
import Footer from "./footer";
import styled, {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
        body {
            background: seashell;
            color: #1a1a1a;
        }
        body, h1, h2, h3, h4 {
            margin: 0;
        }
`

const App = () => (
    <>
        <GlobalStyle/>
        <Header/>
        <MainContainer/>
    </>
)

export default App
