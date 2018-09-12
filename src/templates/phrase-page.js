import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../layouts/layout'
import { Helmet } from 'react-helmet'

export default ({ data }) => {
  const phrase = data.phrasesJson
  return (
    <Layout>
      <Helmet title={'Phrase: ' + phrase.title} />
      <h2>{phrase.title}</h2>
      <p>{phrase.phraseId}</p>
      <p>
        <Link to="/">Search phrases</Link>
      </p>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    phrasesJson(fields: { slug: { eq: $slug } }) {
      phraseId
      title
    }
  }
`
