import {circle} from "../geometry/Сircle";

export const bezierCurveEquation = (bezierDotsX, bezierDotsY, context) => {

    // circle(context, -Math.sqrt(bezierDotsX**2 / 2), -Math.sqrt(bezierDotsX**2 / 2), 0.8)

    // let Qx = null;
    // let Qy = null;
    // let u = 0;
    // let w = 0;
    //
    // while(u <= 1){
    //     while(w <= 1){
    //         Qy = bezierDotsY[0] * (1-u) * (1-w) + bezierDotsY[1] * (1-u) * w + bezierDotsY[2] * (1-w) * u + bezierDotsY[3] * u * w
    //         Qx = bezierDotsX[0] * (1-u) * (1-w) + bezierDotsX[1] * (1-u) * w + bezierDotsX[2] * (1-w) * u + bezierDotsX[3] * u * w
    //         circle(context, Qx, Qy, 0.5);
    //         console.log(Qx, Qy)
    //         w += 0.1;
    //     }
    //     w = 0;
    //     u += 0.1;
    // }
}