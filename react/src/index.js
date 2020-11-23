import React from 'react';
import ReactDOM from 'react-dom';
import "./styles.css";

const rootElement = document.querySelector('#root');

// const greetingElem = document.createElement('div');
// greetingElem.classList.add('greeting');
// greetingElem.textContent = 'Hello, React!';

// rootElement.append(greetingElem);

// <div class="greeting">
//     <div class="greeting__title">Hello, World!</div>
//     <div class="greeting__text">I'm learning React</div>
// </div>

// const element = React.createElement(
//     'div',
//     { className: 'greeting' },

//         React.createElement(
//             'div',
//             { className: 'greeting__title' },
//             'Hello, World!'
//         ),
//         React.createElement(
//             'div',
//             { className: 'greeting__text' },
//             'I\'m learning React'
//         ),
// );

const element = (
    <div className="greeting">
        <div class="greeting__title">Hello, World!</div>
        <div class="greeting__text">I'm learning React</div>
    </div>
);

ReactDOM.render(element, rootElement);
