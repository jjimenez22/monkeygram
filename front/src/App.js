import React from 'react';
import Header from "./header/header";
import MainContainer from "./main/main.container";
import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
        body {
            background: seashell;
            color: #1a1a1a;
        }
        body, h1, h2, h3, h4 {
            margin: 0;
        }
        #root {
          max-width: 1200px;
          margin: auto;
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
