import { Link } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';

const Navbar = () => {

    // const isLogin = useSelector ((state: RootState) => state.auth.isLogin);
    // const navigate = useNavigate();
    // const dispatch = useDispatch();
    // const handleClick = () => {
    //     dispatch(logout());
    //     navigate("/login");
    // }

    return(
        <nav className = "navbar">
            <ul>
                <li>
                    <Link to = "/">Home</Link>
                </li>
                <li>
                    <Link to = "/products">Products</Link>
                </li>
                <li>
                    <Link to = "/upcoming">Upcoming</Link>
                </li>
        {/* delete the below lines */}
                <li>
                    <Link to = "/register" >Register</Link>
                </li>
                <li>
                    <Link to = "/login" >Login</Link>
                </li>

{/* delete the above lines later into production */}

            </ul>
            {/* {
                isLogin ?
                <button onClick = {handleClick}>Logout</button>
                :
                <ul>
                    <li><Link to = "/register" >Register</Link></li>
                    <li><Link to = "/login" >Login</Link></li>
                </ul>
            } */}
        </nav>
    )
}

export default Navbar;