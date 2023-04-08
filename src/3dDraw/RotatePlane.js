import {rotationAroundY} from "../rotationAroundAxis/RotationAroundY";
import {rotationAroundZ} from "../rotationAroundAxis/RotationAroundZ";
import {rotationAroundX} from "../rotationAroundAxis/RotationAroundX";

const rotationAxisSelect = (num, coordinateArr, angleRotation) =>{

    let coordinateArrAfterRotation = [];

    if(num === 0){
        coordinateArrAfterRotation = rotationAroundY(coordinateArr, coordinateArrAfterRotation, angleRotation[0])
    }else if(num === 1){
        coordinateArrAfterRotation = rotationAroundZ(coordinateArr, coordinateArrAfterRotation, angleRotation[1])
    }else{
        coordinateArrAfterRotation = rotationAroundX(coordinateArr, coordinateArrAfterRotation, angleRotation[2])
    }

    return coordinateArrAfterRotation
}

export const rotatePlane = (angleRotation, coordinateArr, setCoordinateArr, axleNumber) => {

    if(axleNumber !== 3){
        setCoordinateArr(rotationAxisSelect(axleNumber, coordinateArr, angleRotation))
    }else{
        let rotationY;
        let rotationZ;
        let rotationX;
        rotationY = rotationAxisSelect(0, coordinateArr, angleRotation)
        rotationZ = rotationAxisSelect(1, rotationY, angleRotation)
        rotationX = rotationAxisSelect(2, rotationZ, angleRotation)
        setCoordinateArr(rotationX)
    }

}