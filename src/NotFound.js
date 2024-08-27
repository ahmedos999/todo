import {Link} from 'react-router-dom';
const NotFound = () => {
    return ( <div className="not-found">
        <h2>Sorry - Not sorry</h2>
        <p>Your Page cannot be found</p>
        <Link to="/">Go back to Home Page</Link>
    </div> );
}
 
export default NotFound;