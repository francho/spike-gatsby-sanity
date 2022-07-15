import './NavBar.scss'

import classNames from 'classnames'
import { Link } from 'gatsby'
import React, { FC, useState } from 'react'
import { MdLocalMovies } from 'react-icons/md'

const NavBar: FC = () => {
  const [mobileMenuActive, setMobileMenuActive] = useState(false)
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a href="/" className="navbar-item navbar-logo">
          <MdLocalMovies className="navbar-logo-img" />
          <div className="navbar-logo-text">moviesDB</div>
        </a>

        <button
          className={classNames('navbar-burger', { 'is-active': mobileMenuActive })}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          onClick={() => setMobileMenuActive(!mobileMenuActive)}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>

      <div id="navbarBasicExample" className={classNames('navbar-menu', { 'is-active': mobileMenuActive })}>
        <div className="navbar-end">
          <Link to="/movies" className="navbar-item">
            Movies
          </Link>
          <Link to="/stars" className="navbar-item">
            Stars
          </Link>
          <Link to="/directors" className="navbar-item">
            Directors
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
