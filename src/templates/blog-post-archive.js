import React from "react"
import { Link, graphql } from "gatsby"
import parse from "html-react-parser"

import Layout from "../components/layout"
import Seo from "../components/seo"
// import Bio from "../components/bio"

const BlogIndex = ({
  data,
  pageContext: { nextPagePath, previousPagePath },
}) => {
  const posts = data.allWpPost.nodes

  if (!posts.length) {
    return (
      <Layout isHomePage>
        <Seo title="All posts" />

        <p>No blog posts found. Add posts to your WordPress site and they'll appear here!</p>
      </Layout>
    )
  }

  return (
    <Layout isHomePage>
      <Seo title="All posts" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6">
        {posts.map(post => {
          const title = post.title

          return (
            <article
              key={post.uri}
              className="post-list-item bg-gray-200 p-6 rounded-xl shadow-lg overflow-hidden"
              itemScope
              itemType="http://schema.org/Article"
            >
              <header>
                <h2>
                  <Link className="text-primary" to={post.uri} itemProp="url">
                    <span itemProp="headline">{parse(title)}</span>
                  </Link>
                </h2>
                <small className="">{post.date}</small>
              </header>
              <section itemProp="description">{parse(post.excerpt)}</section>
            </article>
          )
        })}
      </div>

      <hr className="my-6" />

      <nav className="blog-post-nav flex flex-wrap justify-between px-4 w-full">
        {previousPagePath ? <Link className="text-accent" to={previousPagePath}>&laquo; Previous page</Link> : <p>&laquo; Previous page</p>}
        {nextPagePath ? <Link className="text-accent justify-self-end" to={nextPagePath}>Next page &raquo;</Link> : <p>Next page &raquo;</p>}
      </nav>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query WordPressPostArchive($offset: Int!, $postsPerPage: Int!) {
    allWpPost(sort: {date: DESC}, limit: $postsPerPage, skip: $offset) {
      nodes {
        excerpt
        uri
        date(formatString: "MMMM DD, YYYY")
        title
        excerpt
      }
    }
  }
`
