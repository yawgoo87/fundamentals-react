import React, {useState} from "react";

const Input = () => {
    const [input, setInputState] = useState('');
    return (
        <div>
            <h3>Input Text: <code>{input}</code></h3>
            {/*Двухсторонее связывание*/}
            <input onChange={e => setInputState(e.target.value)}></input>
        </div>
    );
}

export default Input;