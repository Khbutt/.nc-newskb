import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {
    return (
        <li className="ArticleCard">
            <Link to={`/articles/${article.article_id}`}>
            <h3>Click here to read more</h3>
            </Link>
            <p> Author: {article.author} </p>
            <p> Title: {article.title} </p>
        </li>
    );
};



//return an article and maybe put border around this

export default ArticleCard;