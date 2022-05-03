import { Link } from 'gatsby'
import React from 'react'

const NavBar = (): JSX.Element => {
    return (
        <nav>
            <h1>Birjot Bala</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/projects">Portfolio Projects</Link>
            </div>
        </nav>
    )
}

export default NavBar