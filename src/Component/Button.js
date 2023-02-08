import React, { useState } from "react";
import {Input} from "./Input";
import Calc_Body from "./Calc_Body";

export const Button=(props)=>{

  
    const [input_text, setInput_text] = useState("ok");
    let counter=0;
    
    const btn_click=(e)=>{
      
      setInput_text(e.target.value);
     //کد های مربوط به، به روز رسانی متن در تکست باکس را اینجا نوشتم ولی کار نمیکرد
      
     
    }

    return(
        <div>
        <button className="mybutton" onClick={btn_click} value={props.text}>{props.text}</button>
      
        </div>
    )
}


