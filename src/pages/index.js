import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../layouts/layout'

import Search from '../components/search'

const IndexPage = ({ data }) => (
  <Layout>
    <h1>Hi people</h1>
    <Search />
    <noscript>
      <p>
        Javascript is turned off. You can still use the links opposite but
        Javascript is needed for more interactive phrase searches.
      </p>
    </noscript>
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
