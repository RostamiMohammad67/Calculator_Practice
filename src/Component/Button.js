import React, { useState } from "react";
import {Input, Mytest} from "./Input";
import Calc_Body from "./Calc_Body";

export const Button=(props)=>{

  
    const [input_text, setInput_text] = useState("ok");
    let counter=0;
    
    const btn_click=(e)=>{
      // if(props.text=="+")
      // {
      //   num1=document.getElementById("mynum").value
      // }
      // let res=document.getElementById("mynum").value;
      // document.getElementById("mynum").value =res+props.text;
      setInput_text(e.target.value);
      //خیلی خوب بود از اینجا متن را تحت کنترل  میگرفتیم
    }

    return(
        <div>
        <button className="mybutton" onClick={btn_click} value={props.text}>{props.text}</button>
      
        </div>
    )
}


