import styled from "styled-components";

const smallSize = 40
const mediumSize = 60

const StyledHeader = styled.header`
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: blue;
        height: ${smallSize}px;
        padding: 10px;
        font-size: 20px;
        
        @media screen and (min-width: 800px) {
          height: ${mediumSize}px;
        }
  `

const StyledLogoContainer = styled.div`
        display: flex;
        align-items: center;
        height: 100%;
        h1 {
          font-size: 0.9em;
        }
        img {
          height: 100%;
        }
  `


const StyledNavbar = styled.nav`
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 110px;
        height: 100%;
        button {
          padding: 0;
          background: 0;
          border: 0;
          font-size: 1em;
        }
        div {
          height: 100%;
          width: ${smallSize-20}px; // menos 20 del padding del header
          border-radius: 50%;
          overflow: hidden;
          //padding: 5px 10px;
          @media screen and (max-width: 800px) {
            width: ${mediumSize-20}px;
          }
        }
        div img {
          height: 100%;
        }
  `
export { StyledHeader, StyledLogoContainer, StyledNavbar }
