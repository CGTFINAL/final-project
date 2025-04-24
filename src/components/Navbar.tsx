import { Link } from 'react-router-dom';
import { useState } from 'react';
import style from '../styles/navbar.module.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
        console.log("toggled");
    };

    return (
        <nav className={style.navbar}>
            <button className={style.menutoggle} onClick={toggleMenu}>☰</button>
            <ul className={isMenuOpen ? style.open : style.ul}>
                <li className={style.li}>
                    <Link to="/">Home</Link>
                </li>
                <li className={style.li}>
                    <Link to="/products">Products</Link>
                </li>
                <li className={style.li}>
                    <Link to="/upcoming">Upcoming</Link>
                </li>
                {/* delete the below lines */}
                <li className={style.li}>
                    <Link to="/register" >Register</Link>
                </li>
                <li className={style.li}>
                    <Link to="/login" >Login</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;
