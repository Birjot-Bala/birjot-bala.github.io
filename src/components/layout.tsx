import React from 'react'
import NavBar from './navbar'
import "../styles/global.css"

interface ContentProps {
    children: JSX.Element[] | JSX.Element;
}

const Layout = (prop: ContentProps): JSX.Element => {
    return (
        <main>
            <NavBar/>
            <div className='content'>
                { prop.children }
            </div>
        </main>
    )
}

export default Layout