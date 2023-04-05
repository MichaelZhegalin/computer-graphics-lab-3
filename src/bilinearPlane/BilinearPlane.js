import {circle} from "../geometry/Сircle";
import {drawCircleIn3d} from "../3dDraw/DrawCircleIn3d";
import {drawLineIn3d} from "../3dDraw/DrawLineIn3d";

export const bilinearPlane = (bezierDotsX, bezierDotsY, bezierDotsZ, context) => {

    circle(context, -Math.sqrt(bezierDotsX**2 / 2), -Math.sqrt(bezierDotsX**2 / 2), 0.8)

    let Qx = null;
    let Qy = null;
    let Qz = null;
    let u = 0;
    let w = 0;

    let saveOldQ = [];

    while(u <= 1){
        while(w <= 1){
            saveOldQ = [Qx, Qy, Qz]
            Qy = bezierDotsY[0] * (1-u) * (1-w) + bezierDotsY[1] * (1-u) * w + bezierDotsY[2] * (1-w) * u + bezierDotsY[3] * u * w
            Qx = bezierDotsX[0] * (1-u) * (1-w) + bezierDotsX[1] * (1-u) * w + bezierDotsX[2] * (1-w) * u + bezierDotsX[3] * u * w
            Qz = bezierDotsZ[0] * (1-u) * (1-w) + bezierDotsZ[1] * (1-u) * w + bezierDotsZ[2] * (1-w) * u + bezierDotsZ[3] * u * w
            drawCircleIn3d(context, Qx, Qy, Qz, 0.15, 'red')
            if(w !== 0){
                context.beginPath();
                context.strokeStyle = 'red'
                context.lineWidth = 0.8;
                drawLineIn3d(context, [Qx, Qy, Qz], saveOldQ)
                context.stroke();
            }
            w += 0.2;
        }
        w = 0;
        u += 0.2;
    }

    while(w <= 1){
        while(u <= 1){
            saveOldQ = [Qx, Qy, Qz]
            Qy = bezierDotsY[0] * (1-u) * (1-w) + bezierDotsY[1] * (1-u) * w + bezierDotsY[2] * (1-w) * u + bezierDotsY[3] * u * w
            Qx = bezierDotsX[0] * (1-u) * (1-w) + bezierDotsX[1] * (1-u) * w + bezierDotsX[2] * (1-w) * u + bezierDotsX[3] * u * w
            Qz = bezierDotsZ[0] * (1-u) * (1-w) + bezierDotsZ[1] * (1-u) * w + bezierDotsZ[2] * (1-w) * u + bezierDotsZ[3] * u * w
            if(u !== 0){
                context.beginPath();
                context.strokeStyle = 'red'
                context.lineWidth = 0.8;
                drawLineIn3d(context, [Qx, Qy, Qz], saveOldQ)
                context.stroke();
            }
            u += 0.2;
        }
        u = 0;
        w += 0.2;
    }
}