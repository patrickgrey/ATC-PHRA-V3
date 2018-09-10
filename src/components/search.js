import React from 'react'

class Search extends React.Component {
  constructor() {
    super()
    this.state = { count: 0 }
  }
  render() {
    return (
      <div>
        <p>Current count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          plus
        </button>
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>
          minus
        </button>
      </div>
    )
  }
}

export default Search
