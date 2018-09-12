import React from 'react'
import { Helmet } from 'react-helmet'
import '../styles/layout.css'

class Layout extends React.Component {
  render() {
    const IS_SSR = typeof window === 'undefined'

    return (
      <div>
        <Helmet>
          <html lang="en-GB" className={IS_SSR ? 'no-js' : 'js'} />
          <title>Search phrases</title>
          <meta charSet="utf-8" />
          <meta
            name="Description"
            content="Search and get detail about common phraseology used in air traffic control."
          />
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
          <script type="text/javascript">
            document.documentElement.className =
            document.documentElement.className.replace(/\\bno-js\\b/,'js');
          </script>
        </Helmet>
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
