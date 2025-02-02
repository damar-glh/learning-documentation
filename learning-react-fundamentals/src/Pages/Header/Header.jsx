import {Link} from "react-router-dom";
import './Header.css';
import PropTypes from "prop-types";

const Navbar = [
    {label: 'Home', path: '/'},
    {label: 'Products', path: '/products'},
    {label: 'About', path: '/about'},
    {label: 'Contact', path: '/contact'}
]

const NavbarItem = ({label, path}) => {
    return (
        <li className="navbar-item">
            <Link to={path} className="navbar-link">{label}</Link>
        </li>
    )
}

NavbarItem.propTypes = {
    label: PropTypes.string,
    path: PropTypes.string
}

export default function Header() {
    return (
        <nav className="navbar">
            <h1 className="logo">SShop.</h1>
            <ul className="nav-links">
                {Navbar.map((item, index) => {
                    return (
                        <NavbarItem key={index} label={item.label} path={item.path}/>
                    )
                })}
            </ul>
            <div>
                <input type="text" placeholder="Search" className="search"/>
                <button className="btn">Sign In</button>
            </div>
        </nav>
    );
}