import axios from "axios";

const articleApi = axios.create({
    baseURL: "https://nc-news-rss6.onrender.com/api"
})

function getArticles() {
    return articleApi.get("/articles")
    .then((res) => {
        console.log(res.data)
        return res.data
    })
    .catch((error) => {
        console.log(error)
        console.log("error, 404 not found")
    });
};

// export const getArticlesById = (article_id) => {
//     return articleApi.get(`/articles/${article_id}`)
//     .then((res) => {
//         return res.data
//     })
// }


export default getArticles;
