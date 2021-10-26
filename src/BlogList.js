import { Link } from "react-router-dom";

const BlogList = ({blogs , title, /*handleDelete*/}) => {
    return (
        <div className="blog-list">
            {blogs.map(blog => (
                <div className="blog-preview border-bottom border-secondary border-1 pt-2" key={blog.id}>
                    <Link to={`blogs/${blog.id}`} className="text-decoration-none">
                        <h2 className="blog-title">{blog.title}</h2>
                        <p className="blog-author">Written By <span>{blog.author}</span></p>
                    </Link>
                    {/* <button className="btn btn-danger" onClick={() => handleDelete(blog.id)}>Delete Blog</button> */}
                </div>
            ))}
        </div>
    );
}

export default BlogList;