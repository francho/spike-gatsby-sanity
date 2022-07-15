import './Layout.scss'

import React, { ReactNode } from 'react'
import Helmet from 'react-helmet'
import { VscGithub } from 'react-icons/vsc'

import NavBar from './NavBar/NavBar'

interface LayoutProps {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <Helmet title="movies spike"></Helmet>
    <header>
      <NavBar />
    </header>
    <main>{children}</main>
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <VscGithub /> <a href="https://github.com/francho/spike-gatsby-sanity/">Source code</a>
        </p>
      </div>
    </footer>
  </>
)

export default Layout
