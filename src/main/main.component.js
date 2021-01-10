import React from 'react';
import styled from 'styled-components'

const StyledMain = styled.main`
            padding: 12px;
            height: 120px;
            article {
              display: flex;
            }
            article p {
              margin-top: 0;
            }
            background: yellow;
            
            @media screen and (max-width: 800px) {
              
            }
        `
const ImgContainer = styled.div`
  width: 30%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
`

const MainComponent = (props) => {
    const articles = props.articles?.map((article) => (
        <article>
            <ImgContainer>
                <img src={article.img} alt="pic"/>
            </ImgContainer>
            <div>
                <h4>{article.title}</h4>
                <p>{article.content}</p>
            </div>
            </article>
    ))

    return (
        <StyledMain>
            {articles}
        </StyledMain>
    )
}

export default MainComponent
