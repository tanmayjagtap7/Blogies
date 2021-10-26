import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found offset-md-1">
            <title>Page Not Found · Blogies</title>
            <h2 className="display-1 fw-normal">Error : 404</h2>
            <p className="h3 text-danger">Page Not Found</p>
            <Link to="/" className="text-primary">Return back to Homepage</Link>
        </div>
    );
}
 
export default NotFound;