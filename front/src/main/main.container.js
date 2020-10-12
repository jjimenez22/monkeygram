import React from 'react';
import MainComponent from "./main.component";
import articleClient from '../clients/article.client'

class MainContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = { articles: [] }
    }

    componentDidMount() {
        console.log('##### component did mount')
        articleClient.getArticles().then(response => {
            console.log('####### get articles then')
            this.setState({
                articles: response.data
            })
        })
    }

    render() {
        return <MainComponent articles={this.state.articles}/>
    }
}

export default MainContainer
