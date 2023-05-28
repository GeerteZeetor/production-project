import React, {useState} from 'react';
import classes from "./Counter.module.scss";

export const Counter = ():JSX.Element => {
    const [count, setCount] = useState(0)
    const increment = () => {
        setCount(prevState => ++prevState)
    }
    const decrement = () => {
        setCount(prevState => --prevState)
    }

    return (
        <div >
            <h1>{count}</h1>
            <button className={classes.btn} onClick={increment}>INCREMENT</button>
            <button className={classes.btn} onClick={decrement}>DECREMENT</button>
        </div>
    );
};
