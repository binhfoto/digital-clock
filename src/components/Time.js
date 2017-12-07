import React, {Component} from 'react';
import moment from 'moment';
import 'moment-timer';

class Time extends Component {
    constructor (props) {
        super(props);
        this.state = this.getTime();
    }

    componentDidMount () {
        this.timer = moment.duration(1000).timer({loop: true}, () => {
            this.setState(this.getTime());
        });
    }

    componentWillUnmount() {
        this.timer.stop();
    }

    render () {
        return (
            <div className="time">
                <h1>{this.state.time}</h1>
            </div>
        );
    }

    getTime () {
        this.props.locale &&
        this.props.locale !== moment.locale() &&
        moment.locale(this.props.locale);

        return {
            time: moment().format('LTS')
        };
    }
};

export default Time;