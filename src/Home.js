// import { useState, useEffect } from "react"; Now it is used in useFetch.js
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    // Code below shifted to useFetch.js to create custom hook
    // const [blogs, setBlogs] = useState(null);
    // const [isPending, setIsPending] = useState(true);
    // const [error , setError] = useState(null);

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs);
    //   }

    // Code below shifted to useFetch.js to create custom hook
    // useEffect(() => {
    //     fetch('http://localhost:8000/blogs')
    //     .then(res => {
    //         if(!res.ok){
    //             throw Error("Could not fetch the data")
    //         }
    //         return res.json()
    //     })
    //     .then(data => {
    //         setBlogs(data);
    //         setError(null);
    //         setIsPending(false);
    //     })
    //     .catch(err => {
    //         setIsPending(false);
    //         setError(err.message);
    //     })
    // },[])

    const {data : blogs, isPending, error} = useFetch('http://localhost:8000/blogs');

    return (
        <div className="home m-5">
            <title>Blogies</title>
            {error && <div>{error}</div> }
            {isPending && <div className="lmessage d-flex justify-content-center">Loading...</div> }
            {blogs && < BlogList blogs = {blogs} />}
        </div>
    );
}

export default Home;