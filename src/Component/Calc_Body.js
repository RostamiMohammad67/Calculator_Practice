import { Button } from "./Button";
import {Input} from "./Input"
import "./MyStyle.css"
import React, { useState } from "react";
const Calc_Body=(props)=>{

     const [input_text, setInput_text] = useState("");

    const btn_click=(e)=>{
      setInput_text(e.target.value)
      
    }
    
return(
    
    <table border="0" className="table">
        <tbody>
        <tr>
            <td colSpan="3">
                <Input text={props.text}></Input>
            </td>
            <td>
              
            <Button  btn_click  text="/"></Button>
            </td>
        </tr>
        <tr>
            <td>
                <Button text="1"></Button>
            </td>
            <td>
                <Button text="2"></Button>
            </td>
            <td>
                <Button text="3"></Button>
            </td>
            <td>
                <Button text="+"></Button>
            </td>
        </tr>
        <tr>
            <td>
                <Button text="4"></Button>
            </td>
            <td>
                <Button text="5"></Button>
            </td>
            <td>
                <Button text="6"></Button>
            </td>
            <td>
                <Button text="-"></Button>
            </td>
        </tr>
        <tr>
            <td>
                <Button text="7"></Button>
            </td>
            <td>
                <Button text="8"></Button>
            </td>
            <td>
                <Button text="9"></Button>
            </td>
            <td>
                <Button text="*"></Button>
            </td>
        </tr>
        <tr>
            <td colSpan="4">
            <Button text="="></Button>
            </td>
            
        </tr>
        </tbody>
    </table>
)
}
export default Calc_Body;