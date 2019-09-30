import React, {memo} from 'react';
import Graduations from './graduations';
import './clock.style.scss';

const Clock = memo(({time, styles = {}, title = ''}) => {
    return (
        <div className="clock-wrapper">
            <div className="title">
                {title}
            </div>
            <div className="clock">
                <div className="inner">
                    <div style={styles.hour} className="hour hand" />
                    <div style={styles.minute} className="minute hand" />
                    <div style={styles.second} className="second hand" />
                    <Graduations />
                </div>
            </div>
            <div className="caption">
                <div className="caption__time">
                    {time}
                </div>
            </div>
        </div>
    )
});

export default Clock;