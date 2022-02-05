import PropTypes from 'prop-types'
import React from 'react'
import Footer from './Footer'
import Header from './Header'

function Layout({ children }) {
  return (
    <div className="container mx-auto">
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout

Layout.propTypes = { children: PropTypes.node.isRequired }
