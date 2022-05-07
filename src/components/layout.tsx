import React from 'react'
import NavBar from './navbar'
import '../styles/global.css'

interface ContentProps {
    children: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: ContentProps): JSX.Element => {
    return (
        <main>
            <NavBar/>
            { children }
        </main>
    )
}

export default Layout