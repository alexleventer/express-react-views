import React from 'react';
import PropTypes from 'prop-types';

class Layout extends React.Component {
  render() {
    const {title, children} = this.props;
    return (
      <html>
        <head>
          <title>{title}</title>
          <link rel="stylesheet" href="/stylesheets/style.css" />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            // This is making use of ES6 template strings, which allow for
            // multiline strings. We specified "{jsx: {harmony: true}}" when
            // creating the engine in app.js to get this feature.
            console.log("hello world");
          `,
            }}
          />
        </head>
        <body>{children}</body>
      </html>
    );
  }
}

Layout.propTypes = {
  title: PropTypes.string,
};

module.exports = Layout;
