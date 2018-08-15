import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import './reset.css'
import './index.css'

const Layout = ({ children, data }) => (
  <div>
    <Helmet>
      <title>{ data.site.siteMetadata.title }</title>

      // SEO attributes
      <meta name="description" content="What Credit Card Should I Get Next?" />
      <meta name="keywords" content="credit cards, reddit, flowchart, /r/churning, churning, credit, travel hacking, points, frequent flier miles, miles, cashback, sign-up bonus" />

      // Open Graph
      <meta property="og:title" content="What Credit Card Should I Get Next?" />
      <meta name="og:description" content="credit cards, reddit, flowchart, /r/churning, churning, credit, travel hacking, points, frequent flier miles, miles, cashback, sign-up bonus" />
      <meta property="og:url" content="https://reddit.com/r/churning" />

      // favicon attributes
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#242444" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />

    </Helmet>
    <Header siteTitle={ data.site.siteMetadata.title } />
    <div>
      { children() }
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
