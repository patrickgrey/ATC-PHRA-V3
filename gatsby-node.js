/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
//https://stackoverflow.com/questions/49456106/how-to-make-a-one-to-many-connection-between-netlify-cms-and-gatsby/49456107#49456107
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `PhrasesJson`) {
    // console.log(node)
    const slug =
      createFilePath({ node, getNode, basePath: 'pages' }) +
      'phrase' +
      node.phraseId +
      '/'
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allPhrasesJson {
          edges {
            node {
              phraseId
              title
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      // console.log(result.data.allPhrasesJson.edges[4])
      result.data.allPhrasesJson.edges.forEach(phrase => {
        // console.log(phrase)
        // edge.node.phrases.forEach(({ phrase }) => {
        createPage({
          path: phrase.node.fields.slug,
          component: path.resolve(`./src/templates/phrase-page.js`),
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            // phraseID: phrase.node.phraseId,
            slug: phrase.node.fields.slug,
          },
        })
        // })
      })
      resolve()
    })
  })
}
