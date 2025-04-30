import { Link } from 'react-router-dom';
import { useState } from 'react';
import style from '../styles/navbar.module.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
        console.log("toggled");
    };

    return (
        <nav className={style.navbar}>
            {/* <div className={style.brand}>React Attack</div> */}
            <Link to="/" className={style.navLink}><div className={style.logo}><img className={style.logo} src='./reactLogo.svg'></img></div></Link>

            <button className={style.menuToggle} onClick={toggleMenu}>
                <span></span>
            </button>

            <ul className={`${style.navList} ${isMenuOpen ? style.open : ''}`}>
                <li className={style.navItem}>
                    <Link to="/" className={style.navLink}>Home</Link>
                </li>
                <li className={style.navItem}>
                    <Link to="/all-products" className={style.navLink}>Products</Link>
                </li>
                <li className={style.navItem}>
                    <Link to="/new-drop" className={style.navLink}>Upcoming</Link>
                </li>
                <li className={style.navItem}>
                    <Link to="/register" className={style.navLink}>Register</Link>
                </li>
                <li className={style.navItem}>
                    <Link to="/login" className={style.navLink}>Login</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
