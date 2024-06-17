import { default as React, useRef, useState } from 'react';

const Test = () => {

    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);
    const [laps, setLaps] = useState([]);
    const timerRef = useRef(null);

    const start = () => {
        if (!running) { 
            setRunning(true);
            timerRef.current = setInterval(() => {
                setTime(prevTime => prevTime + 10);
            }, 10);
        }
    };

    const stop = () => {
        if (running) {
            setRunning(false);
            clearInterval(timerRef.current);
        }
    };

    const reset = () => {
        stop();
        setTime(0);
        setLaps([]);
    };

    const lap = () => {
        if (running) {
            setLaps([...laps, time]);
        }
    };

    const formatTime = (time) => {
        const milliseconds = ("00" + (time % 1000)).slice(-3);
        const seconds = ("0" + (Math.floor(time / 1000) % 60)).slice(-2);
        const minutes = ("0" + (Math.floor(time / 60000) % 60)).slice(-2);
        const hours = ("0" + Math.floor(time / 3600000)).slice(-2);
        return `${hours}:${minutes}:${seconds}.${milliseconds}`;
    };
    return (
        <>
            <div className='container ' style={{ textAlign: 'center' }}>
                <h1>#Test</h1>
                <h1>Stopwatch</h1>
                <div>{formatTime(time)}</div>
                <div>
                    <button onClick={start}>Start</button>
                    <button onClick={stop}>Stop</button>
                    <button onClick={lap}>Lap</button>
                    <button onClick={reset}>Reset</button>
                </div>
                <h2>Laps</h2>
                <ul>
                    {laps.map((lapTime, index) => (
                        <li key={index}>{formatTime(lapTime)}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Test

