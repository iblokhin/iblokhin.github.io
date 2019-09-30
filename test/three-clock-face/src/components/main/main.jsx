import React from 'react';
import TimePicker from 'react-times';
import Header from '../header';
import Footer from '../footer';
import Clock from '../clock';
import 'react-times/css/material/default.css';
import './main.style.scss';

const Main = (props) => {
    const {time, timePickerTime, setCurrentTime, onTimeChange, onFocusChange, setTimePickerTime} = props;
    const timeNow = time.hour && time.minute ? `${time.hour}:${time.minute}` : timePickerTime;

    return (
        <div className="main-page">
            <Header/>
            <section className="main-page__content">
                <div className="bar">
                    <div className="bar__part">
                        <div className="bar__block">
                            <p className="bar__block__title">Check time</p>
                            <TimePicker
                                theme="material"
                                colorPalette="dark"
                                onFocusChange={onFocusChange}
                                onTimeChange={onTimeChange}
                                time={timeNow}
                            />
                        </div>
                    </div>
                    <div className="bar__part">
                        <div className="bar__block">
                            <p className="bar__block__title">Back time</p>
                            <button className="main-page__current-button" onClick={setCurrentTime}>
                                Set current time
                            </button>
                        </div>
                    </div>
                </div>
                <div className="main-page__clocks">
                    <Clock setTimePickerTime={setTimePickerTime} time={time} tz="Europe/London" title="London"/>
                    <Clock setTimePickerTime={setTimePickerTime} time={time} tz="Europe/Kiev" title="Kiev"/>
                    <Clock setTimePickerTime={setTimePickerTime} time={time} tz="America/New_York" title="New York"/>
                </div>
            </section>
            <Footer/>
        </div>
    );
}

export default Main;