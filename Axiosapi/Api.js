import axios from "axios";

const articleApi = axios.create({
    baseURL: "https://nc-news-rss6.onrender.com/api"
})

export const getArticles = () => {
    return articleApi.get("/articles")
    .then((res) => {
        console.log(res)
        return res.data
    })
    .catch((error) => {
        console.log(error)
        console.log("error, 404 not found")
    });
};

export const getIndividualArticle = (article_id) => {
    console.log(article_id, "<<<< ARTICLE ID IN API CALL")
    return articleApi.get(`/articles/${article_id}`)
    .then((res) => {
        console.log(res)
        return res.data
    })
    .catch((error) => {
        console.log(error)
        console.log("error, 404 not found")
    });
};

// export default 