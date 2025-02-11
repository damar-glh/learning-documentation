import {NavLink} from "react-router-dom";
import './Header.css';
import PropTypes from "prop-types";
import {ProductContext} from "../../Context/Product.jsx";
import {useContext} from "react";

const Navbar = [
    {label: 'Home', path: '/'},
    {label: 'Products', path: '/products'},
    {label: 'About', path: '/about'},
    {label: 'Contact', path: '/contact'}
]

const NavbarItem = ({label, path}) => {
    return (
        <li className="navbar-item">
            <NavLink to={path} className={({isActive, isPending}) => {
                return isActive ? 'active' : isPending ? 'pending' : '';
            }}>{label}</NavLink>
        </li>
    )
}

NavbarItem.propTypes = {
    label: PropTypes.string,
    path: PropTypes.string
}

export default function Header() {
    const {cart} = useContext(ProductContext)
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
            <div className="right">
                <div className="cart">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                         className="lucide lucide-shopping-cart">
                        <circle cx="8" cy="21" r="1"/>
                        <circle cx="19" cy="21" r="1"/>
                        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
                    </svg>
                    <span className="cart-count">{cart}</span>
                </div>
                <input type="text" placeholder="Search" className="search"/>
                <button className="btn">Sign In</button>
            </div>
        </nav>
    );
}