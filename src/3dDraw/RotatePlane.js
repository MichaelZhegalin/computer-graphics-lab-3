import {rotationAroundY} from "../rotationAroundAxis/RotationAroundY";
import {rotationAroundZ} from "../rotationAroundAxis/RotationAroundZ";
import {rotationAroundX} from "../rotationAroundAxis/RotationAroundX";

export const rotatePlane = (angleRotation, coordinateArr, setCoordinateArr) => {

    let coordinateArrAfterRotation = [];

    coordinateArrAfterRotation = rotationAroundY(coordinateArr, coordinateArrAfterRotation, 0)
    coordinateArrAfterRotation = rotationAroundZ(coordinateArr, coordinateArrAfterRotation, 0)
    coordinateArrAfterRotation = rotationAroundX(coordinateArr, coordinateArrAfterRotation, angleRotation)

    setCoordinateArr(coordinateArrAfterRotation)

    console.log(coordinateArrAfterRotation, coordinateArr)

}