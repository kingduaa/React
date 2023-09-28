import React, { useState } from 'react'



export const State = () => {
    const [Count,SetCount] = useState(0);

function increment(){
    SetCount(prevCount=> prevCount + 1);
}
function decrement(){
    SetCount(prevCount=>prevCount - 1)
}
    return (
        <>
        <button onClick={decrement}>-</button>
        <span>{Count}</span>
        <button onClick={increment}>+</button>
        </>
                )
             }
 export default State;