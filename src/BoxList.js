import React, {useState} from "react";
import Box from './Box.js';
import NewBoxForm from "./NewBoxForm.js";
import { v4 as uuid } from 'uuid';

function BoxList() {
    const INITIAL_STATE = [];

    const [boxes, setBoxes] = useState(INITIAL_STATE);

    const [showButton, setShowButton] = useState(false);

    const addBox = (newBox) => {
        setBoxes(boxes => [...boxes, { ...newBox, id: uuid() }]);
        setShowButton(true);
    }

    const removeBox = (id) => {
        setBoxes(boxes.filter(b => b.id !== id));
    }

    return (
        <>
            <h1>Colored Boxes</h1>
            <NewBoxForm addBox={addBox} />
            <div>
                {boxes.map(({ id, width, height, color }) => <Box id={id} key={id} width={width} height={height} color={color} removeBox={removeBox} showButton={showButton}/>)}
            </div>                        
        </>
    )
}

export default BoxList;