import React from 'react';
import { AiOutlineMessage, AiOutlineSearch } from 'react-icons/ai'

import { StyledHeader, StyledLogoContainer, StyledNavbar } from './header.style'

const Header = () => (
    <StyledHeader>
        <StyledLogoContainer>
            <img src="https://svgsilh.com/svg/148222.svg" alt="banana"/>
            <h1>Monkeygram!</h1>
        </StyledLogoContainer>
        <StyledNavbar>
            <button><AiOutlineSearch/></button>
            <button><AiOutlineMessage/></button>
            <div>
                <img
                    src="https://images.pexels.com/photos/39571/gorilla-silverback-animal-silvery-grey-39571.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="user"/>
            </div>
        </StyledNavbar>
    </StyledHeader>
)


export default Header
