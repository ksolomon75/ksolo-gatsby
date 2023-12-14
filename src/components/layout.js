import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import parse from "html-react-parser"

const Layout = ({ isHomePage, children }) => {
  const {
    wp: {
      generalSettings: { title },
    },
  } = useStaticQuery(graphql`
    query LayoutQuery {
      wp {
        generalSettings {
          title
          description
        }
      }
    }
  `)

  return (
    <div className="global-wrapper bg-gradient-to-b from-accent to-primary" data-is-root-path={isHomePage}>
      <header className="global-header bg-gradient-to-r from-primary to-accent px-4 py-2 flex flex-row justify-between items-center">
        {isHomePage ? (
          <h1 className="main-heading text-accent">
            <Link to="/">{parse(title)}</Link>
          </h1>
        ) : (
          <Link className="header-link-home text-accent" to="/">
            {title}
          </Link>
        )}

        <nav className="nav flex flex-row gap-4">
          <Link className="header-link text-primary font-sans text-fontSize-3 hover:text-gray-500" to="/">
            Home
          </Link>
          <Link className="header-link text-primary font-sans text-fontSize-3 hover:text-gray-500" to="/contact">
            Contact Me
          </Link>
        </nav>
      </header>

      <main>{children}</main>

      <footer>
        © {new Date().getFullYear()}, Keith Solomon, all rights reserved.  Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
        {` `}
        And <a href="https://wordpress.org/">WordPress</a>
      </footer>
    </div>
  )
}

export default Layout
