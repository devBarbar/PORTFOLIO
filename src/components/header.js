import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <div className="container">
      <div className="inner-header">
        <div className="logo">
          <Link to="/">devBarbar</Link>
        </div>
        <div className="navigation">
          <nav>
            <Link to="#about">About</Link>
            <Link to="/work">Work</Link>
            <Link to="/about">Contact</Link>
            <a href="#">Résumé</a>
          </nav>
        </div>
      </div>
    </div>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

/**
 * HEADER STYLING
 */

const StyledHeader = styled.header`
  & {
    height: 80px;
    width: 100%;
    position: absolute;
    top: 0px;
    z-index: 10;

    & .inner-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 80px;
    }

    & .logo {
      a {
        font-weight: 700;
        text-decoration: none;
        letter-spacing: 1.5px;
        color: black;
      }
    }

    & .navigation {
      nav {
        a {
          margin: 0 20px;
          text-decoration: none;
          letter-spacing: 1.75px;
          text-transform: uppercase;
          font-size: 0.75rem;
          color: black;
          $:last-child {
            margin-right: 0px;
          }
        }
      }
    }
  }
`
