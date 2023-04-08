export const rotationAroundZ = (coordinateArr, coordinateArrAfterRotation, angleRotation) =>{

    if(angleRotation === ""){
        angleRotation = 0;
    }

    let xCoordinate = '';
    let yCoordinate = '';
    let zCoordinate = '';

    for(let i = 0; i < coordinateArr.length; i++){
        zCoordinate = Number(coordinateArr[i].zCoordinate)
        yCoordinate = Number(coordinateArr[i].yCoordinate) * Math.cos(angleRotation * Math.PI/180) - Number(coordinateArr[i].xCoordinate) * Math.sin(angleRotation * Math.PI/180)
        xCoordinate = Number(coordinateArr[i].yCoordinate) * Math.sin(angleRotation * Math.PI/180) + Number(coordinateArr[i].xCoordinate) * Math.cos(angleRotation * Math.PI/180)

        coordinateArrAfterRotation[i] = {
            xCoordinate: xCoordinate,
            yCoordinate: yCoordinate,
            zCoordinate: zCoordinate,
            id: i,
        }
    }

    return coordinateArrAfterRotation
}
