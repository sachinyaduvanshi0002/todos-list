import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3">
      <div className="container">

        <Link className="navbar-brand fw-bold fs-4 text-success" to="/">
          📝 {props.title}
        </Link>

        <div className="collapse navbar-collapse">

          <ul className="navbar-nav me-auto ms-4">
            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/">Home</Link>
            </li>

            <li className="nav-item ms-3">
              <Link className="nav-link fw-semibold" to="/about">About</Link>
            </li>
          </ul>

          {props.searchBar && (
            <input
              className="form-control w-25 rounded-pill px-3"
              type="search"
              placeholder="🔍 Search todos..."
              onChange={(e) => props.setSearch(e.target.value)}
            />
          )}

        </div>
      </div>
    </nav>
  )
}

Header.propTypes = {
  title: PropTypes.string
}
