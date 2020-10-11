const axios = require('axios').default

module.exports = {
    getArticles: () => axios.get('http://localhost:8080/articles')
}
