import React from 'react';
import styled from "styled-components";

const StyledHeader = styled.header`
            display: flex;
            justify-content: space-between;
            align-items: center;
            
            div {
              padding: 10px;
              display: flex;
              align-items: center;
              h1 {
                font-size: 0.9em;
              }

              img {
                height: 40px;
              }
            }
            
            nav {
              display: flex;
              justify-content: space-between;
              align-items: center;
              width: auto;
              button {
                padding: 0 10px;
                background: 0;
                border: 0;
                font-size: 1.2em;
              }
              img {
                height: 40px;
                width: 40px;
                border-radius: 100%;
                padding: 5px 10px;
              }
            }

        `

const Header = () => (
    <StyledHeader>
        <div>
            <img src="https://svgsilh.com/svg/148222.svg" alt="banana"/>
            <h1>Monkeygram!</h1>
        </div>
        <nav>
            {/*<button><i className="fas fa-search"></i></button>*/}
            {/*<button><i className="far fa-bell"></i></button>*/}
            <img
                src="https://images.pexels.com/photos/39571/gorilla-silverback-animal-silvery-grey-39571.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="user"/>
        </nav>
    </StyledHeader>
)


export default Header
