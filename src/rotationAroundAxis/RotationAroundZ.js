export const rotationAroundZ = (coordinateArr, coordinateArrAfterRotation, angleRotation) =>{

    let xCoordinate = '';
    let yCoordinate = '';
    let zCoordinate = '';


    for(let i = 0; i < coordinateArr.length; i++){
        zCoordinate = Number(coordinateArr[i].zCoordinate)
        yCoordinate = Number(coordinateArr[i].yCoordinate) * Math.cos(angleRotation) - Number(coordinateArr[i].xCoordinate) * Math.sin(angleRotation)
        xCoordinate = Number(coordinateArr[i].yCoordinate) * Math.sin(angleRotation) + Number(coordinateArr[i].xCoordinate) * Math.cos(angleRotation)

        coordinateArrAfterRotation[i] = {
            xCoordinate: xCoordinate,
            yCoordinate: yCoordinate,
            zCoordinate: zCoordinate,
            id: i,
        }
    }

    return coordinateArrAfterRotation
}
