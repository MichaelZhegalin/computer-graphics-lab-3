import {circle} from "../geometry/Сircle";

export const brokenLine = (context, bezierDotsX, bezierDotsY, bezierDotsZ) => {
    context.beginPath();
    context.strokeStyle = 'blue'
    for(let i = 0; i < (bezierDotsX.length - 1); i++){
        context.moveTo(-Math.sqrt(bezierDotsX[i]**2 / 2) * 10 + bezierDotsZ[i] * 10, -Math.sqrt(bezierDotsX[i]**2 / 2) * 10 + bezierDotsY[i] * 10)
        context.lineTo(-Math.sqrt(bezierDotsX[i + 1]**2 / 2) * 10 + bezierDotsZ[i + 1] * 10, -Math.sqrt(bezierDotsX[i + 1]**2 / 2) * 10 + bezierDotsY[i + 1] * 10)
    }
    context.stroke();

    for(let i = 0; i < bezierDotsX.length; i++){
        circle(context, -Math.sqrt(bezierDotsX[i]**2 / 2) + bezierDotsY[i], -Math.sqrt(bezierDotsX[i]**2 / 2) + bezierDotsZ[i], 0.5, 'orange')
    }

}