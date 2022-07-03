import * as React from 'react'
import { Link } from 'gatsby'
import * as style from './layout.module.css'

const Layout = ({pageTitle, children}) => {
    return (
        <div className={style.container}>
            <title>{pageTitle}</title>
            <nav>
                <ul className={style.navLinks}>
                    <li className={style.navLinkItem}><Link to="/" className={style.navLinkText}>Home</Link></li>
                    <li className={style.navLinkItem}><Link to="/about" className={style.navLinkText}>About</Link></li>
                </ul>
            </nav>
            <main>
                <h1 className={style.heading}>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout