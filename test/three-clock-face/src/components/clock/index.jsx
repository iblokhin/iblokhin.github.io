import React, {Component} from 'react';
import Clock from './clock';
import moment from "moment";
import 'moment-timezone';

const KIEV_TIME_ZONE = "Europe/Kiev";
const MAX_NUMBER_DEGREES = 360;
const MAX_NUMBER_HOUR = 12;
const MAX_NUMBER_SECOND_AND_MINUTE = 60;
const DEGREES_IN_ONE_HOUR = MAX_NUMBER_DEGREES / MAX_NUMBER_HOUR;
const DEGREES_IN_ONE_MINUTE_FOR_HOUR = DEGREES_IN_ONE_HOUR / MAX_NUMBER_DEGREES;
const TIME_POINT = {
    hour: 'hour',
    minute: 'minute',
    second: 'second',
};
const FORMAT_TIME = {
    hour12: 'hh',
    hour24: 'HH',
    minute: 'mm',
    second: 'ss'
};

class ClockWrapper extends Component {
    state = {
        styles: {
            [TIME_POINT.hour]: {},
            [TIME_POINT.minute]: {},
            [TIME_POINT.second]: {},
        },
        digitTime: '',
        degreeValueHour: 0
    };

    componentDidMount() {
        this.timer();
        this.timerId = setInterval(() => this.timer(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    /**
     * Timer of the clock
     */
    timer = () => {
        this.setHandRotation(TIME_POINT.hour);
        this.setHandRotation(TIME_POINT.minute);
        this.setHandRotation(TIME_POINT.second);
    };

    /**
     * Set degree value for styles for clock
     */
    setDegreeValueHour = (degreeValue) => {
        if(this.state.degreeValueHour !== degreeValue) {
            this.setState({degreeValueHour: degreeValue});
        }
    };

    /**
     * Set styles for clock
     */
    setStylesForClock = (hand, percentage) => {
        const degree = this.percentageToDegree(percentage);

        if(hand === TIME_POINT.hour) {
            this.setDegreeValueHour(degree);
        } else {
            this.setState({
                styles: {
                    ...this.state.styles,
                    [hand]: {
                        transform: `rotate(${degree}deg) translate(-50%, -50%)`
                    }
                }
            });
        }

        if(hand === TIME_POINT.minute) {
            if(this.state.degreeValueHour) {
                const rotateValue = this.state.degreeValueHour + DEGREES_IN_ONE_MINUTE_FOR_HOUR * degree;
                this.setState({
                    styles: {
                        ...this.state.styles,
                        [TIME_POINT.hour]: {
                            transform: `rotate(${rotateValue}deg) translate(-50%, -50%)`
                        }
                    }
                });
            }
        }
    };

    /**
     * Set digital Time
     */
    setDigitalTime = (date) => {
        const time = date.format(`${FORMAT_TIME.hour24}:${FORMAT_TIME.minute}`);
        this.setState({digitTime: time});
    };

    /**
     * Changes the rotation of the hands of the clock
     * @param  {HTMLElement} hand   One of the hand of the clock
     * @param  {number}      degree degree of rotation of the hand
     */
    setHandRotation = (hand) => {
        const {tz, time: {hour, minute}} = this.props;
        const dateNow = moment(new Date());
        let hours, minutes, seconds, percentage, localDate, date;

        if(hour && minute) {
            let newData = dateNow.set({
                [TIME_POINT.hour]: hour,
                [TIME_POINT.minute]: minute,
                [TIME_POINT.second]: dateNow.format(FORMAT_TIME.second)
            });
            localDate = moment.tz(newData, KIEV_TIME_ZONE);
            date = localDate.clone().tz(tz);
        } else {
            localDate = moment.tz(dateNow, KIEV_TIME_ZONE);
            date = localDate.clone().tz(tz);
        }

        switch (hand) {
            case 'hour':
                hours       = date.format(FORMAT_TIME.hour12);
                percentage  = this.numberToPercentage(hours, MAX_NUMBER_HOUR);
                break;
            case 'minute':
                minutes     = date.format(FORMAT_TIME.minute);
                percentage  = this.numberToPercentage(minutes, MAX_NUMBER_SECOND_AND_MINUTE);
                break;
            case 'second':
                seconds     = date.format(FORMAT_TIME.second);
                percentage  = this.numberToPercentage(seconds, MAX_NUMBER_SECOND_AND_MINUTE);
                break;
            default:
                return hand;
        }

        this.setStylesForClock(hand, percentage);
        this.setDigitalTime(date);
        this.props.setTimePickerTime(dateNow.format('HH:mm'));
    };

    /**
     * Converting a number to a percentage
     * @param  {number} number Number
     * @param  {number} max    Maximum value of the number
     * @return {number}        Return a percentage
     */
    numberToPercentage = (number = 0, max = 60) => {
        return (number / max) * 100;
    };

    /**
     * Converting a percentage to a degree
     * @param  {number} percentage Percentage
     * @return {number}            Return a degree
     */
    percentageToDegree = (percentage = 0) => {
        return (percentage * 360) / 100;
    };

    render() {
        const {digitTime, styles} = this.state;
        const {title} = this.props;

        return (
            <Clock
                time={digitTime}
                title={title}
                styles={styles}
            />
        )
    }
};

export default ClockWrapper;
