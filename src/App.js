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
    }])
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
    function removeDot(dot){
        setCoordinateArr(coordinateArr.filter(dots => dots.id !== dot))
    }

    const clear = () =>{
        setClearState(prevState => !prevState);
    }

    const draw = () => {
        setState(prevState => !prevState);
    }

  return (
    <div className="App">
        <LabHeader/>
        <Canvas clearState={clearState} draw={draw} setClearState={setClearState} state={state} coordinateArr={coordinateArr}/>
        <Interface draw={draw} clear={clear} removeDot={removeDot} createNewDot={createNewDot} coordinateArr={coordinateArr} setCoordinateArr={setCoordinateArr}/>
    </div>
  );
}

export default App;
