import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement('h1', { id: 'heading' }, 'Hello without index.jsx');
const heading2 = <h2>this is another heading</h2>
const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);
root.render(heading2);

