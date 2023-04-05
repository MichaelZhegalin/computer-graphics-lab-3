export const rotationAroundX = (coordinateArr, coordinateArrAfterRotation, angleRotation) =>{

    let xCoordinate = '';
    let yCoordinate = '';
    let zCoordinate = '';

    for(let i = 0; i < coordinateArr.length; i++){
        xCoordinate = Number(coordinateArr[i].xCoordinate)
        yCoordinate = Number(coordinateArr[i].yCoordinate) * Math.cos(angleRotation) + Number(coordinateArr[i].zCoordinate) * Math.sin(angleRotation)
        zCoordinate = -Number(coordinateArr[i].yCoordinate) * Math.sin(angleRotation) + Number(coordinateArr[i].zCoordinate) * Math.cos(angleRotation)

        coordinateArrAfterRotation[i] = {
            xCoordinate: xCoordinate,
            yCoordinate: yCoordinate,
            zCoordinate: zCoordinate,
            id: i,
        }
    }

    return coordinateArrAfterRotation
}