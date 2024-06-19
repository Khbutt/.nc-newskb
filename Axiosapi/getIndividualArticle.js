import axios from "axios";

const articleApi = axios.create({
    baseUrl: "https://nc-news-rss6.onrender.com/api"
})

function getIndividualArticle() {
    return articleApi.get(`/articles/${article_id}`)
    .then((res) => {
        console.log(res.data)
        return res.data
    })
    .catch((error) => {
        console.log(error)
        console.log("error, 404 not found")
    });
};


export default getIndividualArticle;