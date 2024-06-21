import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard.jsx";
import { getArticles } from "../Axiosapi/Api.js";


const Articles = () => {
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => {
    getArticles()
    .then(({ articles }) => {
        setArticles(articles);
        setIsLoading(false);
    });
}, []);

if (isLoading) {
    return <p className="Articles">Loading...</p>
}

return (
    <ul className="Articles">
        {articles.map((article) => {
            return <ArticleCard key={article.article_id} article={article} />;
        })}
    </ul>
)
}

export default Articles;