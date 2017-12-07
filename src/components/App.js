import React from 'react';
import DigitalClock from './DigitalClock';
import Time from './Time';
import Date from './Date';
import '../styles/index.css';

const App = () => (
    <div className="app">
        <DigitalClock locale="en"/>
        <DigitalClock locale="vi" showDate/>
        <DigitalClock locale="fr" showDate/>
        <Time/>
        <Date/>
    </div>
);

export default App;