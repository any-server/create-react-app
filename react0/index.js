const rootElement = document.querySelector('#root');

// const greetingElem = document.createElement('div');
// greetingElem.classList.add('greeting');
// greetingElem.textContent = 'Hello, React!';

// rootElement.append(greetingElem);

const element = React.createElement(
    'div',
    { className: 'greeting' },
    [
        React.createElement(
            'div',
            { className: 'greeting__title' },
            'Hello, World!'
        ),
        React.createElement(
            'div',
            { className: 'greeting__text' },
            'I\'m learning React'
        ),
    ]
);

ReactDOM.render(element, rootElement);
