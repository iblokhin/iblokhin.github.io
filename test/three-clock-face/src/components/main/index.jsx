import React, {Component} from 'react';
import Main from './main';

const initialTime = {
    hour: '',
    minute: ''
};

class MainWrapper extends Component {
    state = {
        time: {
            initialTime
        },
        timePickerTime: ''
    };

    onTimeChange = (options) => {
        const {hour, minute} = options;
        this.setState({time: {hour, minute}});
    };

    setCurrentTime = () => {
        this.setState({time: {initialTime}});
    };

    onFocusChange = (focused) => {
        if(this.state.time.hour && this.state.time.minute && !focused) {
            setTimeout(() => this.setCurrentTime(), 10000);
        }
    };

    setTimePickerTime = (time) => {
        this.setState({timePickerTime: time});
    };

    render() {
        const {time, timePickerTime} = this.state;
        return (
            <Main
                time={time}
                timePickerTime={timePickerTime}
                onTimeChange={this.onTimeChange}
                onFocusChange={this.onFocusChange}
                setCurrentTime={this.setCurrentTime}
                setTimePickerTime={this.setTimePickerTime}
            />
        )
    };
};

export default MainWrapper;