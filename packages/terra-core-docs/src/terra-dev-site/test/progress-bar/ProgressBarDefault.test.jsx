import React, {useState} from 'react';
import ProgressBar from 'terra-progress-bar';
import Button from 'terra-button';

const ProgressBarDefault = () => {
    const [val, setVal] = useState(10);
    let intervalId, curVal;
    curVal = 10;

    const start = () => {
        intervalId = setInterval(updateProgress, 2000);
    }

    const updateProgress = () => {
        setVal((val) => {
            curVal = val + 10;
            return val + 10;
        });

        if (curVal === 100) {
            clearInterval(intervalId);
        }
    }

    return (
        <>
            <ProgressBar id="progressbar" value={val} label={`Progress bar: ${val}%`} valueText={`Progress is ${val}%`}/>
            <br/>
            <Button text='Start' onClick={start}/>
            &nbsp;
            <Button text='Reset' onClick={() => { setVal(10) }}/>
        </>
    )
}

export default ProgressBarDefault;
