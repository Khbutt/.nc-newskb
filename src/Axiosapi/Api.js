import axios from "axios";

const articleApi = axios.create({
    baseURL: "https://nc-news-rss6.onrender.com/api"
})

export const getArticles = () => {
    return articleApi.get("/articles")
    .then((res) => {
        return res.data
    })
    .catch((error) => {
        console.log(error)
        console.log("error, 404 not found")
    });
};

export const getIndividualArticle = (article_id) => {
    return articleApi.get(`/articles/${article_id}`)
    .then((res) => {
        return res.data
    })
    .catch((error) => {
        console.log(error)
        console.log("error, 404 not found")
    });
};

export const getComments = (article_id) => {
    return articleApi.get(`/articles/${article_id}/comments`)
    .then(({data}) => {
        return data.comments
    })
}
