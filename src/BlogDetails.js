import { useParams } from "react-router";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, isPending, error} = useFetch("http://localhost:8000/blogs/" + id);

    return (
        <div className="blog-details">
            { error && <div>{ Error } </div>}
            { isPending && <div>Loading </div>}
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written By: { blog.author }</p>
                    <div>{ blog.body }</div>
                </article>
            )}
            
        </div>
    );
}
 
export default BlogDetails;