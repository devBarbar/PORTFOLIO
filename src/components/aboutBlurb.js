import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
function AboutBlurb() {
  const data = useStaticQuery(graphql`
    query {
      avatar: file(relativePath: { eq: "immobilien-und-consulting.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      avatar2: file(relativePath: { eq: "ibm-logo-white.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      react: file(relativePath: { eq: "react-icon.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      gatsby: file(relativePath: { eq: "gatsby-icon.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      python: file(relativePath: { eq: "python-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <AboutStyle id="about" className="about-blurb">
      <div className="container">
        <div className="inner-blurb">
          <div className="content">
            <h3>The Ability to create</h3>
            <p>
              <strong>Fullstack Developer</strong> @giroxx, specialized in
              developing fast, responsive & clean websites, using React.js
              powered by Gatsby and a highly secure and real time backend with
              Tornado Websockets in Python &{" "}
              <strong>Freelance Developer</strong> building Custom CMS powered
              by Gatsby / Next.js for best SEO & Performance Results and
              Lighthouse Scores of 100%.
            </p>
            <div className="icons">
              <div className="icon react-icon">
                <Img fluid={data.react.childImageSharp.fluid}></Img>
              </div>
              <div className="icon gatsby-icon">
                <Img fluid={data.gatsby.childImageSharp.fluid}></Img>
              </div>
              <div className="icon python-icon">
                <Img fluid={data.python.childImageSharp.fluid}></Img>
              </div>
            </div>
            <div className="btn-row">
              <Link>Projects (soon)</Link>
            </div>
          </div>
          <div className="images">
            <div className="top-right">
              <Img fluid={data.avatar.childImageSharp.fluid}></Img>
            </div>
            <div className="bottom-left">
              <Img fluid={data.avatar.childImageSharp.fluid}></Img>
            </div>
          </div>
        </div>
        <div className="black-box"></div>
        <div className="black-box overlay"></div>
      </div>
    </AboutStyle>
  )
}

export default AboutBlurb

const AboutStyle = styled.div`
  & {
    padding: 48px 0;
    background-color: white;
    position: relative;

    .inner-blurb {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .content {
        width: 33%;
        @media (max-width: 1440px) {
          width: 40%;
        }
        h3 {
          font-weight:700;
          text-transform:uppercase;
          font-size:1.8rem;
          letter-spacing:1.5px;
          margin:0;
        }
        p {
          font-size:1rem;
          line-height:2rem;
          font-weight:300;
          margin 40px 0 40px;
        }
        .btn-row {
          a {
            font-weight:700;
            font-size:.875rem;
            letter-spacing:1.5px;
            color:black;
            text-transform:uppercase;
            text-decoration:none;
          }
        }

        .icons {
          display:flex;
          flex-direction:row;
          align-items:center;
          justify-content:space-between;
          width:100%;
          height:50px;
          margin-bottom:72px;

          .react-icon {
            width:100px;
          }

          .gatsby-icon {
            width:50px;
          }

          .python-icon {
            width:50px;
          }
        }
      }
      .images {
        width:50%;
        height:800px;
        position:relative;
        z-index:7;
        @media (max-width: 1440px) {
          height:800px;
        }

        .top-right {
          position:absolute;
          width:460px;
          top:0;
          right:0;
          z-index:4;
          @media (max-width: 1440px) {
            width:360px;
          }
        }
        .bottom-left {
          position:absolute;
          width:410px;
          left:0;
          bottom:0;

          @media (max-width: 1440px) {
            width:310px;
          }
          
        }
      }
    }
    .black-box {
      background:black;
      height:418px;
      width:836px;
      position:absolute;
      right:0;
      top:50%;
      transform:translateY(-50%);
      @media(max-width:1440px) {
        width:636px;
        height:340px;
      }

      &.overlay {
        z-index:7;
        background:#63333E;
        mix-blend-mode:overlay;
      }
    }
  }
`
