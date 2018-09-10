import React from 'react'
import { Helmet } from 'react-helmet'

class Layout extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="Search phrases" />
        <div style={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem` }}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Layout

// export default ({ children }) => (
//   <div style={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem` }}>
//     {children}
//   </div>
// )
