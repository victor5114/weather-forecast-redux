import React from 'react';
import ReactDOM from 'react-dom';

// Create a new component. this component should produce some HTML
const App = () => <div>Hi!</div>;

// Take this compnent's generated HTML and put it on the page (in the DOM)

// /*eslint-env browser*/
ReactDOM.render(<App />, document.querySelector('.container'));
