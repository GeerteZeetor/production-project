import React, {useState} from 'react';
import './Counter.scss'

export const Counter = ():JSX.Element => {
    const [count, setCount] = useState(0)
    const increment = () => {
        setCount(prevState => ++prevState)
    }
    const decrement = () => {
        setCount(prevState => --prevState)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    );
};
