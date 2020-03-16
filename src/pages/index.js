import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Latest info</h1>
    <div>
      <div>Are we in quarantine?</div>
      <div>YES</div>
      <div>Until 33.02.2020</div>
    </div>
    <hr />
    <h2>Latest news:</h2>
    <p>
      Not all official info is translated in time, that's why we're here for you
    </p>
    <h2>Links:</h2>
  </Layout>
)

export default IndexPage
