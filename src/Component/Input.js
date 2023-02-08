import React, { useState } from "react";


export const Input=(props)=>{
    const [text, setText] = useState(props.text); 
    return(
        
        <input className="myinput" id="mynum" value={props.text} ></input>
    )

}

