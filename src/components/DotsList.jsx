import React from 'react';
import PointEntry from "./pointEntry";

const DotsList = ({coordinateArr, setCoordinateArr}) => {
    return (
        <div className="dotsList">
            {coordinateArr.length === 0
                ?
                <h2>Нет заданных точек!</h2>
                :
                coordinateArr.map((el, num) =>
                <PointEntry key={el.id} num={num} coordinate={el} setCoordinateArr={setCoordinateArr}/>
            )}
        </div>
    );
};

export default DotsList;