import React, { useState, useEffect } from 'react';
import './App.css';

export const App: React.FC = () => {
    const [isRunning, setIsRunning] = useState<boolean>(false);
    const [timer, setTimer] = useState<number>(10); // Начальное значение таймера

    useEffect(() => {
        let interval: ReturnType<typeof setInterval> | undefined;
        if (isRunning && timer > 0) {
            interval = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);
        } else if (!isRunning) {
            clearInterval(interval);
            setTimer(10); // Сброс таймера
        }
        return () => clearInterval(interval!);
    }, [isRunning, timer]);

    const handleClick = (): void => {
        setIsRunning(!isRunning);
    };

    return (
        <div className="App">
            <div className="block">Блок 1</div>
            <div className="block">Блок 2</div>
            <button className={`start-btn ${isRunning ? 'running' : ''}`} onClick={handleClick}>
                {isRunning ? `${timer} seconds` : 'START'}
            </button>
        </div>
    );
};

