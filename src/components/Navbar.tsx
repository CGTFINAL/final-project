import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {


    return(
        <nav className = "navbar">
            <ul>
                <li>
                    <Link to = "/">Home</Link>
                </li>
                <li>
                    <Link to = "/Products">Products</Link>
                </li>
                <li>
                    <Link to = "/Upcoming">Upcoming</Link>
                </li>
                <li>
                    
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;