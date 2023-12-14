import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout className="min-h-screen" location={location} title={siteTitle}>
      <Seo title="404: Not Found" />
      <article
        className="blog-post bg-gray-200 p-6 rounded-xl shadow-lg"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header className="pb-6">
          <h1>404: Not Found</h1>
        </header>

        <section itemProp="articleBody"><p>You just hit a route that doesn&#39;t exist... the sadness.</p></section>
      </article>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
