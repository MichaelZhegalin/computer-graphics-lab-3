export const rotationAroundY = (coordinateArr, coordinateArrAfterRotation, angleRotation) =>{

    let xCoordinate = '';
    let yCoordinate = '';
    let zCoordinate = '';

    for(let i = 0; i < coordinateArr.length; i++){
        yCoordinate = Number(coordinateArr[i].yCoordinate)
        zCoordinate = Number(coordinateArr[i].zCoordinate) * Math.cos(angleRotation) + Number(coordinateArr[i].xCoordinate) * Math.sin(angleRotation)
        xCoordinate = -Number(coordinateArr[i].zCoordinate) * Math.sin(angleRotation) + Number(coordinateArr[i].xCoordinate) * Math.cos(angleRotation)

        coordinateArrAfterRotation[i] = {
            xCoordinate: xCoordinate,
            yCoordinate: yCoordinate,
            zCoordinate: zCoordinate,
            id: i,
        }
    }

    return coordinateArrAfterRotation
}