import { useHistory, useParams } from "react-router";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const {id} = useParams();
    const {data : blog, error, isPending} = useFetch("http://localhost:8000/blogs/" + id);
    const history = useHistory();

    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/' + blog.id,{
            method : 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }

    return ( 
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && (
                <div className="h2 text-danger offset-md-1"><title>Fetch Error · Blogies</title>{error}</div>
            )}
            {blog && (
                <article className="pt-2 px-5">
                    <title>{blog.title}</title>
                    <h2 className="m-1 px-5">{blog.title}</h2>
                    <p className="m-1 px-5 danger">Written by <span>{blog.author}</span></p>
                    <div className="blog-body m-3 px-5">{blog.body}</div>
                    <button className="btn text-light m-5 px-5" onClick={handleDelete}>Delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;