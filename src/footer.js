import React from 'react';
import styled from 'styled-components'

const StyledFooter = styled.footer`
div {
        color: antiquewhite;
        display: flex;
        justify-content: center;
        padding-top: 10px;
    }
`
const Footer = () => (
    <StyledFooter>
        <div>
            Made with &#127820; by Monkeys!
        </div>
    </StyledFooter>
)

export default Footer
