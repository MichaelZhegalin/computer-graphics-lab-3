import {drawLineIn3d} from "../3dDraw/DrawLineIn3d";
import {drawCircleIn3d} from "../3dDraw/DrawCircleIn3d";

export const brokenLine = (context, bezierDotsX, bezierDotsY, bezierDotsZ) => {
    context.beginPath();
    context.strokeStyle = 'blue'

    drawLineIn3d(context, [bezierDotsX[0], bezierDotsY[0], bezierDotsZ[0]], [bezierDotsX[1], bezierDotsY[1], bezierDotsZ[1]])
    drawLineIn3d(context, [bezierDotsX[0], bezierDotsY[0], bezierDotsZ[0]], [bezierDotsX[2], bezierDotsY[2], bezierDotsZ[2]])
    drawLineIn3d(context, [bezierDotsX[1], bezierDotsY[1], bezierDotsZ[1]], [bezierDotsX[3], bezierDotsY[3], bezierDotsZ[3]])
    drawLineIn3d(context, [bezierDotsX[2], bezierDotsY[2], bezierDotsZ[2]], [bezierDotsX[3], bezierDotsY[3], bezierDotsZ[3]])

    context.stroke();

    for(let i = 0; i < bezierDotsX.length; i++){
        drawCircleIn3d(context, bezierDotsX[i], bezierDotsY[i], bezierDotsZ[i], 0.5, 'orange')
    }

}