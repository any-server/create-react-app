import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const rootElement = document.querySelector('#root');

const element = (
  <div className="greeting">
      <div className="greeting__title">Hello, World!</div>
      <div className="greeting__text">I'm learning React</div>
  </div>
);

ReactDOM.render(element, rootElement);
