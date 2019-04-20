import React from 'react';
import ReactDOM from 'react-dom';

const title = 'Politico Reactify';

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app')
);

module.hot.accept();
