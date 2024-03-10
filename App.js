import React from 'react';
import ReactDOM from 'react-dom/client';

const parent = React.createElement('div', { id: 'parent' }, [
    React.createElement('div', { id: 'child1' }, [
        React.createElement('h1', { id: 'heading' }, 'Hello From React!'),
        React.createElement('h2', {}, 'Hello From React!')
    ]),
    React.createElement('div', { id: 'child2' }, [
        React.createElement('h1', { id: 'heading' }, 'Hello From React!'),
        React.createElement('h2', {}, 'Hello From React!')
    ])]
);

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(root);

root.render(parent);
