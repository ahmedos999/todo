import {Link} from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>TODO List</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New TODO</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;