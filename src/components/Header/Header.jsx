import { NavLink } from "react-router-dom"

function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/singup">Singup</NavLink>
                    </li>
                    <li>
                        <NavLink to="/login">Login</NavLink>
                    </li>
                    <li>
                        <NavLink to="/" exact>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/profile">Profile</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header