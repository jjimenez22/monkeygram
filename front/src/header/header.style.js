import styled from "styled-components";

const smallSize = 40
const mediumSize = 60

const StyledHeader = styled.header`
        display: flex;
        justify-content: space-between;
        align-items: center;
        //background: blue;
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
          @media screen and (min-width: 800px) {
            font-size: 1.3em;
          }
        }
        img {
          height: 100%;
        }
  `


const StyledNavbar = styled.nav`
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 35%;
        max-width: 150px;
        height: 100%;
        button {
          padding: 0;
          background: 0;
          border: 0;
          font-size: 1em;
        }
        div {
          height: 100%;
          width: ${smallSize}px; // menos 20 del padding del header
          border-radius: 50%;
          overflow: hidden;
          //padding: 5px 10px;
        }
        div img {
          height: 100%;
        }
        
        @media screen and (min-width: 800px) {
          max-width: 180px;
          button {
            font-size: 1.2em;
          }
          div {
            width: ${mediumSize}px;
          }
        }
  `
export { StyledHeader, StyledLogoContainer, StyledNavbar }
