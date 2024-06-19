import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="Nav">
            <Link to="/" className="NavLink">
            Home
            </Link>
            <Link to ="/articles" className="NavLink">
            Articles
            </Link>
        </nav>
    )
};

export default Nav;