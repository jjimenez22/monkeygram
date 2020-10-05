import React from 'react';
import MainComponent from "./main.component";

const articleObjs = Array(3).fill({
    title: 'Monkeytitle',
    content: 'Some awesome monkey content! BANANAS! BANANAS! BANANAS! BANANAS! BANANAS! BANANAS! BANANAS! '
})

const MainContainer = () => (
    <MainComponent articles={articleObjs}/>
)

export default MainContainer
