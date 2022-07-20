// Code EyesOnMe Component Here
import React from "react";

function EyesOnMe() {
    console.log('in eyes on me')

    const handleFocus = () => {
        console.log("'Good!'")
    }

    const handleBlur = () => {
        console.log("'Hey! Eyes on me!'")
    }
    return (
        <button onFocus={handleFocus} onBlur={handleBlur}>Eyes on Me</button>
    )
}

export default EyesOnMe;