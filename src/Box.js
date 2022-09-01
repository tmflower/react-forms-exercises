import React from "react";

function Box({id, width, height, color, removeBox, showButton}) {
    const handleRemove = () => {
        removeBox(id);
    }    

    return (
        <div 
            className="Box"
            style={{backgroundColor: color, width: width, height: height}}>
            {showButton && <button onClick={handleRemove} style={{backgroundColor: "red"}}>X</button>}    
        </div>
    )
}

export default Box;