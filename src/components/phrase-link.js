import React from 'react'
import { Link } from 'gatsby'

class PhraseLink extends React.Component {
  render() {
    return (
      <li key={this.props.phraseId}>
        <p>
          <Link to={'/phrases/phrase' + this.props.phraseId}>
            {this.props.title}
          </Link>
        </p>
      </li>
    )
  }
}

export default PhraseLink
