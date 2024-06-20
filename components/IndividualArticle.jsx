import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getIndividualArticle } from "../Axiosapi/Api";

const IndividualArticle = () => {
    const [individualArticle, setIndividualArticle] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const {article_id} = useParams()
    
    useEffect(() => {
    getIndividualArticle(article_id)
    .then(( individualArticle ) => {
        // console.log(individualArticle, '<<<< INDIVIDUAL ARTICLE')
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
        <p>{individualArticle.body}</p>
        <p className="AuthorName"> Author: {individualArticle.author} </p>
    </section>
)
}

export default IndividualArticle;