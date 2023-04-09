import './style/App.css';
import './style/btn.css';
import Canvas from "./components/Canvas";
import LabHeader from "./components/LabHeader";
import React, {useEffect, useState} from "react";
import Interface from "./components/Interface";

function App() {

    const [state, setState] = useState(false);
    const [clearState, setClearState] = useState(false);

    let check = false;

    const [coordinateArr, setCoordinateArr] = useState([{
        xCoordinate: "",
        yCoordinate: "",
        zCoordinate: "",
        id: Date.now(),
    }]);

    const [rotationAngles, setRotationAngles] = useState(["", "", ""]);

    useEffect(()=>{
        if(!check && coordinateArr.length < 3){

            check = true;

            for(let i = 0; i < 3; i++){
                createNewDot(i);
            }
        }
    }, [coordinateArr])
    function createNewDot(num){
        setCoordinateArr(prevState => [...prevState, {
            xCoordinate: "",
            yCoordinate: "",
            zCoordinate: "",
            id: Date.now() - num*10,
        }])
    }

    const clear = () =>{
        setClearState(prevState => !prevState);
        for(let i = 0; i < 4; i++){
            coordinateArr[i].xCoordinate = '';
            coordinateArr[i].yCoordinate = '';
            coordinateArr[i].zCoordinate = '';
        }
        setCoordinateArr(prev => [...prev])
        setRotationAngles(["", "", ""])
    }

    const draw = () => {
        setState(prevState => !prevState);
    }

  return (
    <div className="App">
        <LabHeader/>
        <Canvas clearState={clearState} draw={draw} setClearState={setClearState} state={state} coordinateArr={coordinateArr}/>
        <Interface draw={draw} clear={clear} coordinateArr={coordinateArr} setCoordinateArr={setCoordinateArr} rotationAngles={rotationAngles} setRotationAngles={setRotationAngles}/>
    </div>
  );
}

export default App;
