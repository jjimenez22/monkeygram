import React from 'react';
import styled from "styled-components";

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-around;
  background: #1a1a1a;
  a {
    padding: 5px;
    color: antiquewhite;
    text-decoration: none;
    font-weight: bold;
  }
`

const Nav = () => (
    <StyledNav>
        <a href="#">Monkeyblogs</a>
        <a href="#">Monkeyimages</a>
        <a href="#">Monkeyvideos</a>
    </StyledNav>
)

export default Nav
