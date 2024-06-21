import { useEffect, useState } from "react";
import { getComments } from "../Axiosapi/Api";
import { useParams } from "react-router-dom";
import { CommentCard } from "./CommentCard";


export const Comments = () => {
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const {article_id} = useParams()
    
    useEffect(() => {
    getComments(article_id)
    .then((comments) => {
        setComments(comments);
        setIsLoading(false);
    });
}, [article_id]);

if (isLoading) {
    return <p className="Comments">Loading...</p>
}


return (
    <section className="Comments"> 
        <h3>Read Reviews Here</h3>
        <ul>
        {comments.map((comment) => {
            return (
            <li key={comment.comment_id}>
            <CommentCard author={comment.author} body={comment.body}/>
            </li>
            )})}
    </ul>
    </section>
)
}

export default Comments;
