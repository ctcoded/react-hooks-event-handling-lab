// Code Keypad Component Here
import React from "react";

function Keypad() {
    console.log('inside keypad')

    function handleChange(e) {
        console.log("'Entering Password'")
    } 

    return (
        <input type="password" onChange={handleChange}></input>
    )
}

export default Keypad;