export const rotatePlane = (angleRotation, coordinateArr, setCoordinateArr) => {

    let coordinateArrAfterRotation = [];

    let xCoordinate = "";
    let yCoordinate = "";
    let zCoordinate = "";


    // for(let i = 0; i < coordinateArr.length; i++){
    //     yCoordinate = Number(coordinateArr[i].yCoordinate)
    //     zCoordinate = Number(coordinateArr[i].zCoordinate) * Math.cos(angleRotation) + Number(coordinateArr[i].xCoordinate) * Math.sin(angleRotation)
    //     xCoordinate = -Number(coordinateArr[i].zCoordinate) * Math.sin(angleRotation) + Number(coordinateArr[i].xCoordinate) * Math.cos(angleRotation)
    //
    //     coordinateArrAfterRotation.push({
    //         xCoordinate: xCoordinate,
    //         yCoordinate: yCoordinate,
    //         zCoordinate: zCoordinate,
    //         id: i,
    //     })
    // }

    for(let i = 0; i < coordinateArr.length; i++){
        xCoordinate = Number(coordinateArr[i].xCoordinate)
        yCoordinate = Number(coordinateArr[i].yCoordinate) * Math.cos(angleRotation) + Number(coordinateArr[i].zCoordinate) * Math.sin(angleRotation)
        zCoordinate = -Number(coordinateArr[i].yCoordinate) * Math.sin(angleRotation) + Number(coordinateArr[i].zCoordinate) * Math.cos(angleRotation)

        coordinateArrAfterRotation.push({
            xCoordinate: xCoordinate,
            yCoordinate: yCoordinate,
            zCoordinate: zCoordinate,
            id: i,
        })
    }

    setCoordinateArr(coordinateArrAfterRotation)

    console.log(coordinateArrAfterRotation, coordinateArr)

}