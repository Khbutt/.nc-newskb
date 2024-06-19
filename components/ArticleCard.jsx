import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {
    return (
        <li className="ArticleCard">
            <Link to={`/articles/${article.artcle_id}`}>
            <h3>{article.article_id}</h3>
            </Link>
            <p> Author: {article.author} </p>
            <p> Title: {article.title} </p>
        </li>
    );
};

export default ArticleCard;