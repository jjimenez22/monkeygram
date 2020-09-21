import React from 'react';
import styled from "styled-components";

const StyledHeader = styled.header`
    background: midnightblue;
    color: antiquewhite;
    display: flex;
    flex-direction: column;
    div {
        padding: 10px;
    }
`

const Header = () => (
    <StyledHeader>
        <div>
            <h1>MONKEYGRAM!</h1>
        </div>
    </StyledHeader>
)


export default Header
