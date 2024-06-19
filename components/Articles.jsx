import { useEffect, useState } from "react";
import getArticles from "../Axiosapi/getArticles.js";
import ArticleCard from "./ArticleCard.jsx";

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