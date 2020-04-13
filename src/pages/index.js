import React from "react"
import Layout from "../components/layout"
import Banner from "../components/banner"
import AboutBlurb from "../components/aboutBlurb"

const IndexPage = () => {
  return (
    <Layout>
      <Banner></Banner>
      <AboutBlurb></AboutBlurb>
    </Layout>
  )
}

export default IndexPage
