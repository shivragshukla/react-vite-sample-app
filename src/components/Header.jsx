import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header>
            <div className="logo">
                <h3>Company Logo</h3>
            </div>
            <nav className="menu">
                <NavLink to="." >Home</NavLink>
                <NavLink 
                    to="about"
                    className={({isActive}) => isActive ? 'active' : null}
                >About</NavLink>
                <NavLink 
                    to="products"
                    className={({isActive}) => isActive ? 'active' : null}
                >Products</NavLink>
            </nav>
        </header>
    );
}

export default Header
