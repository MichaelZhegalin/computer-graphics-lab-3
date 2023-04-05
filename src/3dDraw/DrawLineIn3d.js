export const drawLineIn3d = (context, startPoint, finishPoint) => {

    let startX = startPoint[0];
    let startY = startPoint[1];
    let startZ = startPoint[2];

    let finishX = finishPoint[0];
    let finishY = finishPoint[1];
    let finishZ = finishPoint[2];

    if(startX >= 0 && finishX >= 0){
        context.moveTo(-Math.sqrt(startX**2 / 2) * 10 + startZ * 10, -Math.sqrt(startX**2 / 2) * 10 + startY * 10)
        context.lineTo(-Math.sqrt(finishX**2 / 2) * 10 + finishZ * 10, -Math.sqrt(finishX**2 / 2) * 10 + finishY * 10)
    }else if(startX < 0 && finishX >= 0){
        context.moveTo(Math.sqrt(startX**2 / 2) * 10 + startZ * 10, Math.sqrt(startX**2 / 2) * 10 + startY * 10)
        context.lineTo(-Math.sqrt(finishX**2 / 2) * 10 + finishZ * 10, -Math.sqrt(finishX**2 / 2) * 10 + finishY * 10)
    }else if(startX >= 0 && finishX < 0){
        context.moveTo(-Math.sqrt(startX**2 / 2) * 10 + startZ * 10, -Math.sqrt(startX**2 / 2) * 10 + startY * 10)
        context.lineTo(Math.sqrt(finishX**2 / 2) * 10 + finishZ * 10, Math.sqrt(finishX**2 / 2) * 10 + finishY * 10)
    }
    else{
        context.moveTo(Math.sqrt(startX**2 / 2) * 10 + startZ * 10,Math.sqrt(startX**2 / 2) * 10 + startY * 10)
        context.lineTo(Math.sqrt(finishX**2 / 2) * 10 + finishZ * 10,Math.sqrt(finishX**2 / 2) * 10 + finishY * 10)
    }
}