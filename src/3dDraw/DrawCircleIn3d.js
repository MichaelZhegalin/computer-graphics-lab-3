import {circle} from "../geometry/Сircle";

export const drawCircleIn3d = (context, CoordX, CoordY, CoordZ, radius, color = 'rgba(245,50,56)') => {

    if(CoordX >= 0) {
        circle(context, -Math.sqrt(CoordX ** 2 / 2) + CoordY, -Math.sqrt(CoordX ** 2 / 2) + CoordZ, radius, color)
    }
    else{
        circle(context, Math.sqrt(CoordX**2 / 2) + CoordY, Math.sqrt(CoordX**2 / 2) + CoordZ, radius, color)
    }
}