import React from 'react'
import Link from 'gatsby-link'

import './index.scss'

const Header = ({ siteTitle }) => (
  <div className="header">
    <Link to="/">
      <div className="logo-container">
        Credit Cards
        <img className="wordmark" src="" />
      </div>
    </Link>
  </div>
)

export default Header
