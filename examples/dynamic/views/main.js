import React from 'react';
import ReactDOM from 'react-dom';
import Content from './Content';

export default (data, containerId) => {
  const container = document.getElementById(containerId || 'content');
  ReactDOM.render(<Content {...data} />, container);
};
