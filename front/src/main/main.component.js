import React from 'react';
import styled from 'styled-components'

const StyledMain = styled.main`
            padding: 12px;
            article p {
              margin-top: 0;
            }
        `

const MainComponent = (props) => {
    const articles = props.articles?.map((article) => (
        <article>
            <h4>{article.title}</h4>
            <p>{article.content}</p>
        </article>
    ))

    return (
        <StyledMain>
            {articles}
        </StyledMain>
    )
}

export default MainComponent
