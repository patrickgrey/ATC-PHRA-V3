import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = ({ data }) => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    {data.allPhrasesJson.edges.map(({ node }) => (
      <p key={node.phraseId}>{node.title}</p>
    ))}
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
