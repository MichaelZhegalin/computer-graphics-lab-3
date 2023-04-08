import React from 'react';
import AngleInput from "./AngleInput";

const PlaneRotation = ({rotationAngles, setRotationAngles, coordinateArr, setCoordinateArr}) => {
    return (
        <div className='planeRotation'>
            <AngleInput coordinateArr={coordinateArr} setCoordinateArr={setCoordinateArr} axisName={"Поворот вокруг Y"} rotationAngles={rotationAngles} setRotationAngles={setRotationAngles} axleNumber={0}/>
            <AngleInput coordinateArr={coordinateArr} setCoordinateArr={setCoordinateArr} axisName={"Поворот вокруг Z"} rotationAngles={rotationAngles} setRotationAngles={setRotationAngles} axleNumber={1}/>
            <AngleInput coordinateArr={coordinateArr} setCoordinateArr={setCoordinateArr} axisName={"Поворот вокруг X"} rotationAngles={rotationAngles} setRotationAngles={setRotationAngles} axleNumber={2}/>
        </div>
    );
};

export default PlaneRotation;