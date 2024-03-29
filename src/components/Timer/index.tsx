import React, { useEffect, useState } from 'react';

// Prepend `0` for one digit numbers. For that the number has to be
// converted to string, as numbers don't have length method
const padTime = (time: number) => {
    return String(time).length === 1 ? `0${time}` : `${time}`;
};

const format = (time: number) => {
    // Convert seconds into minutes and take the whole part
    const minutes = Math.floor(time / 60);

    // Get the seconds left after converting minutes
    const seconds = time % 60;

    //Return combined values as string in format mm:ss
    return `${minutes}:${padTime(seconds)}`;
};

export default function App({ setShowResults }: {setShowResults: (arg: boolean) => void}) {
    const [counter, setCounter] = useState(120);
    useEffect(() => {
        let timer: string | number | NodeJS.Timeout | undefined;
        if (counter > 0) {
            timer = setTimeout(() => setCounter(c => c - 1), 1000);
        }

        if(counter === 0) setShowResults(true);

        return () => {
            if (timer) {
                clearTimeout(timer);
            }
        };
    }, [counter]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="App">
            {counter === 0 ? "Time over" : <div>Countdown: {format(counter)}</div>}
        </div>
    );
}