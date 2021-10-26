import { useState } from 'react';
import { useHistory } from 'react-router';

const Create = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("mario")
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author};

        setIsPending(true);

        fetch('http://localhost:8000/blogs',{
            method : 'POST',
            headers : {'COntent-Type' : 'application/json'},
            body : JSON.stringify(blog)
        }).then(() => {
            console.log('New Blog Added');
            setIsPending(false);
            history.push('/');
        })    
    }

    return (
        <div className="create container">
            <title>New Blog · Blogies</title>
            <div className="row">
                <div  className="new-blog col-md-6 offset-md-3">
                    <h2 className="text-center h2">Add a new Blog</h2>

                    <form onSubmit={handleSubmit}>
                        <div className="form-group mb-2">
                            <label className="text-primary h6">Blog Title : </label>
                            <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} required />
                        </div>

                        <div className="form-group mb-2">
                            <label className="text-primary h6">Blog Body : </label>
                            <textarea value={body} className="form-control" rows="5" onChange={(e) => setBody(e.target.value)} required></textarea>
                        </div>

                        <div className="form-group mb-2">
                            <label className="text-primary h6">Blog Author : </label>
                            <select value={author} className="form-select" onChange={(e) => setAuthor(e.target.value)}>
                                <option value="mario">Mario</option>
                                <option value="Joshi">Joshi</option>
                            </select>
                        </div>

                        <div className="text-center">
                            {!isPending && <button className="btn btn-primary">Add Blog</button>}
                            {isPending && <button disabled className="btn btn-primary">Add Blog</button>}
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default Create;