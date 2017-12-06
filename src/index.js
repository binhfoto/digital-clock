/*
 npm install --save-dev webpack
 npm install --save-dev babel-loader babel-core babel-preset-es2015 babel-preset-react

 npm install --save react react-dom

 npm install --save express

 npm install --save path lodash

 npm install --save morgan body-parser method-override


 */

import React from 'react';
import ReactDOM from 'react-dom';
import DigitalClock from './components/DigitalClock';

ReactDOM.render(
    <DigitalClock/>,
    document.getElementById('root')
);