import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export const CommentCard = ({ body, author, title }) => {
    const {article_id} = useParams()
    return (
        <ul>
        <li className="CommentCard">
            <Link to={`/articles/${article_id}`}>
            <h3> </h3>
            </Link>
            <p> Author: {author} </p>
            <p> {body} </p>
        </li>
        </ul>
    );
};
