import React from 'react';
import moment from 'moment';

const Date = ({locale}) => {
    locale && moment.locale(locale);
    return (
        <div className="date">
            <h3>
                {moment().format('LL')}
            </h3>
        </div>
    );
};

export default Date;