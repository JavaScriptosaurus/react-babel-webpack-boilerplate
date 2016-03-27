import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './components/helloWorld';

const helloWorldElement = document.getElementById('hello-world');
ReactDOM.render(<HelloWorld name='User'/>, helloWorldElement);