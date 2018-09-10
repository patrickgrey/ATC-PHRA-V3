import React from 'react'
import { graphql, Link } from 'gatsby'
import { Helmet } from 'react-helmet'

import Layout from '../layouts/layout'

const IndexPage = ({ data }) => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <ul>
      {data.allPhrasesJson.edges.map(({ node }) => (
        <li key={node.phraseId}>
          <p>
            <Link to={'/phrases/phrase' + node.phraseId}>{node.title}</Link>
          </p>
        </li>
      ))}
    </ul>
  </Layout>
)

export const query = graphql`
  query {
    allPhrasesJson {
      edges {
        node {
          phraseId
          title
        }
      }
    }
  }
`

export default IndexPage
