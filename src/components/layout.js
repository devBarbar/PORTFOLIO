/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { createGlobalStyle } from "styled-components"

import Header from "./header"
import "./layout.css"

const GlobalStyle = createGlobalStyle`

    html,body {
      font-family:"Helvetica Neue",-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif ;
      padding:0;
      margin:0;
    }
    .container {
      width:1640px;
      min-width:1640px;
      margin: 0 auto;
    }

    @media(max-width: 1440px) {
      .container {
      width:1280px;
      min-width:1280px;
    }
    }
    @media(max-width: 1280px) {
      .container {
      width:976px;
      min-width:976px;
    }
    }
    @media(max-width: 976px) {
      .container {
      width:768px;
      min-width:768px;
    }
    }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
