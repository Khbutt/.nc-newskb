import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getIndividualArticle } from "../Axiosapi/Api";
import Comments from "./Comments";


const IndividualArticle = () => {
    const [individualArticle, setIndividualArticle] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const {article_id} = useParams()
    
    useEffect(() => {
    getIndividualArticle(article_id)
    .then(( individualArticle ) => {
        setIndividualArticle(individualArticle);
        setIsLoading(false);
    })
}, [article_id]);


if (isLoading) {
    return <p className="Articles">Loading...</p>
}

return (
    <section className="IndividualArticle">
        <h1>{individualArticle.article.title}</h1>
        <p>{individualArticle.article.body}</p>
        <p className="AuthorName"> Author: {individualArticle.article.author} </p>
        <Comments />
    </section>
)
}

export default IndividualArticle;