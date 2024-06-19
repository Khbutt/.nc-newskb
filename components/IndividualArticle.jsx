import { useEffect, useState } from "react";
import getIndividualArticle from "../Axiosapi/getIndividualArticle";

const IndividualArticle = () => {
    const [individualArticle, setIndividualArticle] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const {article_id} = useParams()
    
    useEffect(() => {
    getIndividualArticle(article_id)
    .then(({ individualArticle }) => {
        setIndividualArticle(Individualarticle);
        setIsLoading(false);
    });
}, [article_id]);

if (isLoading) {
    return <p className="Articles">Loading...</p>
}

return (
    <section className="IndividualArticle">
        <h3>{individualArticle.title}</h3>
        <p>{individualArticle.body}</p>
        <p className="AuthorName"> Author: {individualArticle.author} </p>
    </section>
)
}

export default IndividualArticle;