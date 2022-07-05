import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import * as style from './layout.module.css'

const Layout = ({pageTitle, children}) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }`
      );

    return (
        <div className={style.container}>
            <title>{pageTitle} | {data.site.siteMetadata.title}</title>
            <header className={style.siteTitle}>{data.site.siteMetadata.title}</header>
            <nav>
                <ul className={style.navLinks}>
                    <li className={style.navLinkItem}><Link to="/" className={style.navLinkText}>Home</Link></li>
                    <li className={style.navLinkItem}><Link to="/about" className={style.navLinkText}>About</Link></li>
                    <li className={style.navLinkItem}><Link to="/blog" className={style.navLinkText}>Blog</Link></li>
                </ul>
            </nav>
            <main>
                <h1 className={style.heading}>{pageTitle}</h1>
                {children}
            </main>
        </div>
    );
}

export default Layout