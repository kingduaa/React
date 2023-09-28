import React, { useState } from 'react'



export const State = () => {
    const [Count,SetCount] = useState(0);
    const [Color,SetColor] = useState("");
    

function increment(){
    SetCount(prevCount=> prevCount + 1);
}
function decrement(){
    SetCount(prevCount=>prevCount - 1)
}
    return (
        <body style={{backgroundColor:Color}} >
        <button onClick={decrement}>-</button>
        <span>{Count}</span>
        <button onClick={increment}>+</button>
        <hr></hr>
        <button onClick={()=>{
            Color!="pink"? SetColor(Color =>"pink") : SetColor(Color=> "")
            console.log(Color)
        }}>bg</button>
        </body>
                )
             }
 export default State;