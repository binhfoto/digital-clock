import React from 'react';
import Date from './Date';
import Time from './Time';


const DigitalClock = (props) => {
    return (
        <div className="clock">
            <div className="center">
                <Time {...props}/>
                {props.showDate && <Date {...props}/>}
            </div>
        </div>
    );
};

export default DigitalClock;