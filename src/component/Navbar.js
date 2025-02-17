import React from "react"
import { Link, NavLink, withRouter } from "react-router-dom"

const Navbar = (props) => {
    // setTimeout(() => {
    //     props.history.push("/About")
    // }, 2000);
    return (
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <a href="#top" className="brand-logo">PokeItems</a>
                <ul className="right hide-on-med-and-down">
                    <li><Link to="/">Home</Link></li>
                    <li><NavLink to="/About">About</NavLink></li>
                    <li><NavLink to="/Contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}
export default withRouter(Navbar) 