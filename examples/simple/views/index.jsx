import React from 'react';
import PropTypes from 'prop-types';
import Layout from './layout';

// Contrived example to show how one might use Flow type annotations
function countTo(n: number): string {
  const a = [];
  for (let i = 0; i < n; i++) {
    a.push(i + 1);
  }
  return a.join(', ');
}

class Index extends React.Component {
  render() {
    const {title} = this.props;
    return (
      <Layout title={title}>
        <h1>{title}</h1>
        <p>Welcome to {title}</p>
        <p>
          I can count to 10:
          {countTo(10)}
        </p>
      </Layout>
    );
  }
}

Index.propTypes = {
  title: PropTypes.string,
};

module.exports = Index;
