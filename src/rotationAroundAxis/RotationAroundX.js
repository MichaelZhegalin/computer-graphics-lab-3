export const rotationAroundX = (coordinateArr, coordinateArrAfterRotation, angleRotation) =>{

    if(angleRotation === ""){
        angleRotation = 0;
    }

    let xCoordinate = '';
    let yCoordinate = '';
    let zCoordinate = '';

    for(let i = 0; i < coordinateArr.length; i++){
        xCoordinate = Number(coordinateArr[i].xCoordinate)
        yCoordinate = Number(coordinateArr[i].yCoordinate) * Math.cos(angleRotation * Math.PI/180) + Number(coordinateArr[i].zCoordinate) * Math.sin(angleRotation * Math.PI/180)
        zCoordinate = -Number(coordinateArr[i].yCoordinate) * Math.sin(angleRotation * Math.PI/180) + Number(coordinateArr[i].zCoordinate) * Math.cos(angleRotation * Math.PI/180)

        coordinateArrAfterRotation[i] = {
            xCoordinate: xCoordinate,
            yCoordinate: yCoordinate,
            zCoordinate: zCoordinate,
            id: i,
        }
    }

    return coordinateArrAfterRotation
}