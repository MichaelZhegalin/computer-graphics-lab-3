import Buttons from "./Buttons";
import DotsList from "./DotsList";
import {rotatePlane} from "../3dDraw/RotatePlane";
import PlaneRotation from "./PlaneRotation";

const Interface = ({draw, clear, coordinateArr, setCoordinateArr, rotationAngles, setRotationAngles}) => {

    return (
        <div className='interface'>
            <DotsList coordinateArr={coordinateArr} setCoordinateArr={setCoordinateArr}/>
            <PlaneRotation setRotationAngles={setRotationAngles} rotationAngles={rotationAngles} coordinateArr={coordinateArr} setCoordinateArr={setCoordinateArr}/>
            <button className="createDot" onClick={() => rotatePlane(rotationAngles, coordinateArr, setCoordinateArr, 3)}>Повернуть по всем заданным плоскостям</button>
            <Buttons draw={draw} clear={clear}/>
        </div>
    );
};

export default Interface;