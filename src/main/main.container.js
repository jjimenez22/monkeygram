import React from 'react';
import MainComponent from "./main.component";
import articleClient from '../clients/article.client'

class MainContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            articles: [{
                title: 'News Bananas report',
                content: 'Bananas everywhere!',
                img: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80'
            }]
        }
    }

    componentDidMount() {
        // console.log('##### component did mount')
        // articleClient.getArticles().then(response => {
        //     console.log('####### get articles then')
        //     this.setState({
        //         articles: response.data
        //     })
        // })
    }

    render() {
        return <MainComponent articles={this.state.articles}/>
    }
}

export default MainContainer
