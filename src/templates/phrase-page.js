import React from 'react'
import { graphql } from 'gatsby'

export default ({ data }) => {
  const phrase = data.phrasesJson
  return (
    <div>
      <h1>{phrase.title}</h1>
    </div>
  )
}

export const query = graphql`
  query($slug: String!) {
    phrasesJson(fields: { slug: { eq: $slug } }) {
      title
    }
  }
`
