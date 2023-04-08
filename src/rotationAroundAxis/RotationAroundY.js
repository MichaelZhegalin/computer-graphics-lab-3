export const rotationAroundY = (coordinateArr, coordinateArrAfterRotation, angleRotation) =>{

    if(angleRotation === ""){
        angleRotation = 0;
    }

    let xCoordinate = '';
    let yCoordinate = '';
    let zCoordinate = '';

    for(let i = 0; i < coordinateArr.length; i++){
        yCoordinate = Number(coordinateArr[i].yCoordinate)
        zCoordinate = Number(coordinateArr[i].zCoordinate) * Math.cos(angleRotation * Math.PI/180) + Number(coordinateArr[i].xCoordinate) * Math.sin(angleRotation * Math.PI/180)
        xCoordinate = -Number(coordinateArr[i].zCoordinate) * Math.sin(angleRotation * Math.PI/180) + Number(coordinateArr[i].xCoordinate) * Math.cos(angleRotation * Math.PI/180)

        coordinateArrAfterRotation[i] = {
            xCoordinate: xCoordinate,
            yCoordinate: yCoordinate,
            zCoordinate: zCoordinate,
            id: i,
        }
    }

    return coordinateArrAfterRotation
}