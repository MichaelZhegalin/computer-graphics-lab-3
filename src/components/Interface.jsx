import Buttons from "./Buttons";
import DotsList from "./DotsList";
import {rotatePlane} from "../3dDraw/RotatePlane";

const Interface = ({draw, clear, coordinateArr, createNewDot, setCoordinateArr, removeDot}) => {

    return (
        <div className='interface'>
            <DotsList removeDot={removeDot} coordinateArr={coordinateArr} setCoordinateArr={setCoordinateArr}/>
            <button className="createDot" onClick={() => rotatePlane(45, coordinateArr, setCoordinateArr)}>Задать поворот</button>
            <button className="createDot" onClick={createNewDot}>Создать новую точку</button>
            <Buttons draw={draw} clear={clear}/>
        </div>
    );
};

export default Interface;