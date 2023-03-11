import React, {useState} from "react";

const Counter = () => {
    const [counter, setCounterState] = useState(0);

    function increse(){
        setCounterState( counter + 1 )
    } 
  
    function decrese(){
        setCounterState( counter - 1 )
    }

    return(
        <div>
            <h2>Counter: {counter}</h2>
            <button onClick={increse} className="counter-btn incr">Increase</button>
            <button onClick={decrese} className="counter-btn decr">Decrease</button>
        </div>
    );
}

export default Counter;