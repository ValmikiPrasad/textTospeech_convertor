import React, { useState } from "react";
import { useSpeechSynthesis } from "react-speech-kit";
const App=()=>{
    const[text,setTexr]=useState('');
    const {speak}=useSpeechSynthesis();
    const handleCLick=()=>{
        speak({text:text});
    }
    return(
        <div className="main">
            <div className="head">
                <h3>text to speech convertor</h3>
            </div>
            {/* <input type="text"/> */}
            <textarea onChange={(e)=>{setTexr(e.target.value)}} />
            <br/>
            <button onClick={handleCLick}>convert to speech</button>
        </div>
    )
}
export default App;