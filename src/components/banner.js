import React, { useRef, useEffect } from "react"
import { TweenMax, TimelineLite, Power3 } from "gsap"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

function Banner() {
  let app = useRef()
  let images = useRef()
  let content = useRef()
  let heroImage = useRef()
  let fixedMisc = useRef()
  let tl = new TimelineLite({ delay: 0.8 })
  useEffect(() => {
    const leftImage = images.firstElementChild
    const rightImage = images.lastElementChild

    // Content Vars

    console.log(content)

    TweenMax.to(app, 0, { css: { visibility: "visible" } })
    // Images Animation
    tl.from(leftImage, 1.2, { y: 1280, ease: Power3.easeOut }, "Start")
      .from(
        leftImage.firstElementChild,
        2,
        { scale: 1.6, ease: Power3.easeOut },
        0.2
      )
      .from(rightImage, 1.2, { y: 1280, ease: Power3.easeOut }, 0.2)
      .from(
        rightImage.firstElementChild,
        2,
        { scale: 1.6, ease: Power3.easeOut },
        0.2
      )

    tl.staggerFrom(
      [content, heroImage],
      1,
      {
        y: 44,
        ease: Power3.easeOut,
        delay: 0.2,
      },
      0.05,
      "Start"
    ).from(fixedMisc, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.4)
  }, [tl])
  const data = useStaticQuery(graphql`
    query {
      avatar: file(relativePath: { eq: "avatar.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      avatar2: file(relativePath: { eq: "Logo-plain.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      avatar3: file(relativePath: { eq: "giroxx-logo-2.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <BannerStyle ref={el => (app = el)} className="banner">
      <div className="container">
        <div ref={el => (images = el)} className="row">
          <div className="side-image left">
            <Img fluid={data.avatar2.childImageSharp.fluid} />
          </div>
          <div ref={el => (content = el)} className="main-text">
            Barbar Ahmad
          </div>
          <div ref={el => (heroImage = el)} className="main-image">
            <Img fluid={data.avatar.childImageSharp.fluid} />
          </div>
          <div className="side-image right">
            <Img fluid={data.avatar3.childImageSharp.fluid} />
          </div>
        </div>
        <div className="scroll">
          <span>Scroll Down</span>
        </div>
      </div>
      <div ref={el => (fixedMisc = el)} className="fixed-misc">
        Fullstack Developer @giroxx
      </div>
    </BannerStyle>
  )
}

export default Banner

const BannerStyle = styled.div`
& {
    visibility:hidden;
    display:flex;
    align-items:center;
    background-color:white;
    position:relative;
    height:100vh;

    & .row {
        position:relative;

        & .main-text {
            font-size: 5.8rem;
            text-transform:uppercase;
            letter-spacing:42px;
            font-weight:700;
            color:white;
            position:absolute;
            width:100%;
            left:0;
            top:50%;
            transform:translateY(-50%);
            text-align:center;
            mix-blend-mode:difference;
            z-index:9;

            @media (max-width:1440px) {
               font-size:4.4rem;
               letter-spacing:36px;
            }

            
        }

        .main-image {
            width:536px;
            margin: 0 auto;

            @media(max-width: 1440px) {
                width:436px;
            }
        }

        .side-image {
            width:260px;
            position:absolute;

            @media(max-width:1440px) {
                width:208px
            }

            &.left {
                left:168px;
                top:12px;
                @media(max-width:1440px) {
                    left:128px
                }
            }
            &.right {
                right:168px;
                bottom:12px;
                @media(max-width:1440px) {
                    right:128px
                }
            }
        }
    }
}

.scroll {
    font-weight:700;
    font-size:.875rem;
    letter-spacing:1.5px;
    color:black;
    text-transform:uppercase;
    position:absolute;
    bottom:48px;
}

.fixed-misc {
    position:fixed;
    top:50%;
    right:-48px;
    transform:rotate(-90deg);
    font-weight:700;
    text-transform:uppercase;
    font-size:.875rem;
    letter-spacing:1.5px;
    color:white;
    mix-blend-mode:difference;
    z-index:8;

    @media(max-width:1440px) {
        right:-112px;
    }

}
}


`
