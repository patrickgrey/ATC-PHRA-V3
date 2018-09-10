import React from 'react'

class Search extends React.Component {
  constructor() {
    super()
    this.state = { count: 0 }
  }
  render() {
    return (
      <div>
        <div className="phra-js-hide">
          <p>Current count: {this.state.count}</p>
          <button
            onClick={() => this.setState({ count: this.state.count + 1 })}
          >
            plus
          </button>
          <button
            onClick={() => this.setState({ count: this.state.count - 1 })}
          >
            minus
          </button>
        </div>
        <noscript>
          <p>
            Javascript is turned off. You can still use the links opposite but
            Javascript is needed for more interactive phrase searches.
          </p>
        </noscript>
      </div>
    )
  }
}

export default Search
