import React, {memo} from 'react';
import './clock.style.scss';

const numberGraduations = 60;

const Graduations = memo(() => {
    const elements = (() => {
        let items = [];
        for(let i = 0; i < numberGraduations; i++) {
            items.push(<div key={`graduation-${i}`} className="graduation" />);
        }
        return items;
    })();

    return (
        <div className="graduations">
            {elements}
        </div>
    );
});

export default Graduations;