import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar justify-content-around">
            <h1 className="header center">Blogies</h1>
            <ul className="nav">
                <li className="nav-item"><Link to="/" className="nav-link h5">Home</Link></li>
                <li className="nav-item"><Link to="/create" className="nav-link h5">New Blog</Link></li>
            </ul>
        </nav>
     );
}
 
export default Navbar;