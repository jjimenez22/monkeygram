import React from 'react';
import styled from 'styled-components'

const StyledMain = styled.main`
            padding: 12px;
            background: antiquewhite;
`

const Main = () => (
    <StyledMain>
        <h2>Monkeyblogs</h2>
        <article>
            <h4>Monkeytitle</h4>
            <p>Some awesome monkey content! BANANAS! BANANAS! BANANAS! BANANAS! BANANAS! BANANAS! BANANAS! </p>
        </article>
        <article>
            <h4>Monkeytitle</h4>
            <p>Some awesome monkey content! BANANAS! BANANAS! BANANAS! BANANAS! BANANAS! BANANAS! BANANAS! </p>
        </article>
        <article>
            <h4>Monkeytitle</h4>
            <p>Some awesome monkey content! BANANAS! BANANAS! BANANAS! BANANAS! BANANAS! BANANAS! BANANAS! </p>
        </article>
    </StyledMain>
)

export default Main
