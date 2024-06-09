// userEffect() = React Hook that tells React DO SOME CODE WHEN (pick one):
//                This component re-renders
//                This component mounts
//                The state of a value

// useEffect(function, [dependencies])

// 1. userEffect(() => {})           // Runs after every re-render
// 2. userEffect(() => {}, [])       // Runs only on mount
// 3. userEffect(() => {}, [value])  // Runs on mount + when value changes

// USES
// #1 Event Listeners
// #2 DOM manipulation
// #3 Subscriptions (real-time updates)
// #4 Fetching Data from an API
// #5 Clean up when a component unmounts

import React, {useState, useEffect} from 'react';

function Effect() {

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    useEffect(() => {
        document.title = `Count: ${count} ${color}`;

    }, [count, color]);

    function addCount(){
        setCount(c => c + 1);
    }

    function minusCount(){
        setCount(c => c - 1);
    }

    function changeColor(){
        setColor(c => c === "green" ? "red" : "green");
    }

    return(<>
        <p style={{color: color}}>Count: {count}</p>
        <button onClick={addCount}>Add</button>
        <button onClick={minusCount}>Subtract</button><br />

        <button onClick={changeColor}>Change Color</button>
    </>);

}
export default Effect;