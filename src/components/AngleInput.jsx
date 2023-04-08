import React from 'react';
import {rotatePlane} from "../3dDraw/RotatePlane";
import {isNumberCheck} from "../secondaryFunctions/isNumberCheck";

const AngleInput = ({axisName, rotationAngles, setRotationAngles, axleNumber, coordinateArr, setCoordinateArr}) => {

    return (
        <div>
            <button className='rotationBtn rotationBtnLeft' onClick={() => rotatePlane(rotationAngles, coordinateArr, setCoordinateArr, axleNumber)}>↺</button>
            <input type="text" placeholder={axisName} onChange={(e) =>{
                if(isNumberCheck(e.target.value) || e.target.value === ""){
                    if(e.target.value === ""){
                        rotationAngles[axleNumber] = "";
                    }else{
                        rotationAngles[axleNumber] = Number(e.target.value)
                    }
                    setRotationAngles(prev => [...prev])
                }
            }} value={rotationAngles[axleNumber]} />
            <button className='rotationBtn rotationBtnRight' onClick={() =>{
                let newArr = [-rotationAngles[0], -rotationAngles[1], -rotationAngles[2]]
                rotatePlane(newArr, coordinateArr, setCoordinateArr, axleNumber)
            }}>↻</button>
        </div>
    );
};

export default AngleInput;