import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../layouts/layout'

import Search from '../components/search'
import PhraseLink from '../components/phrase-link'

const IndexPage = ({ data }) => (
  <Layout>
    <h1>Search Phrases</h1>
    <Search />

    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <ul>
      {data.allPhrasesJson.edges.map(({ node }) => (
        <PhraseLink
          key={node.phraseId}
          phraseId={node.phraseId}
          title={node.title}
        />
      ))}
    </ul>
  </Layout>
)

export const query = graphql`
  query {
    allPhrasesJson(limit: 10) {
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
