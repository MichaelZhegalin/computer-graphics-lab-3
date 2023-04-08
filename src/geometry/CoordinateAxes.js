import {triangleForCoordAxesY} from "./TriangleForCoordAxesY";
import {triangleForCoordAxesX} from "./TriangleForCoordAxesX";
import {circle} from "./Сircle";
import {triangleForCoordAxesZ} from "./TriangleForCoordAxesZ";

function axes(context) {
    context.beginPath()
    context.moveTo(0, 0)
    context.lineTo(0, 390)
    context.moveTo(0, 0)
    context.lineTo(-0, -180)
    context.moveTo(0, 0)
    context.lineTo(240, 0)
    context.moveTo(0, 0)
    context.lineTo(-180, 0)
    context.moveTo(0, 0)
    context.lineTo(-200, -200)
    context.moveTo(0, 0)
    context.lineTo(80, 80)
    context.stroke()
}

function coordinate(context){
    context.beginPath()
    context.fillStyle = 'black'
    for(let i = 0; i < 420; i += 50){
        if (i !== 0){
            if(i < 400){
                context.moveTo(3, i)
                context.lineTo(-3, i)
                context.font = "15px serif";
                context.fillText(`${i / 10}`, 5, i);
            }else{
                context.fillText(`Y`, 15, i - 15);
            }
        }
    }

    for(let i = 0; i > -180; i -= 50){
        if (i !== 0){
            context.moveTo(3, i)
            context.lineTo(-3, i)
            context.font = "15px serif";
            context.fillText(`${i / 10}`, 5, i);
        }
    }

    for(let i = 0; i < 260; i += 50){
        if (i !== 0){
            if(i < 240){
                context.fillText(`${i / 10}`, i - 5, 15);
                context.moveTo(i, 3)
                context.lineTo(i, -3)
                context.font = "15px serif";
            }else{
                context.fillText(`Z`, i - 20, 25);
            }

        }
    }

    for(let i = 0; i > -180; i -= 50){
        if (i !== 0){
            context.moveTo(i, 3)
            context.lineTo(i, -3)
            context.font = "15px serif";
            context.fillText(`${i / 10}`, i - 10, 15);
        }
    }

    let count = 5;

    for(let i = 0; i > -180; i -= Math.sqrt((50**2) / 2)){
        if (i !== 0){
            context.moveTo(i + 3, i - 3)
            context.lineTo(i - 3, i + 3)
            context.font = "15px serif";
            if(count > 20){
                count = "X"
                context.save()
                context.rotate(81)
                context.fillText(`${count}`, -50, -290);
                context.restore()
            }else{
                context.fillText(`${count}`, i - 18, i + 18);
            }
            count += 5;
        }
    }

    count = -5;

    for(let i = 0; i < 100; i += Math.sqrt((50**2) / 2)){
        if (i !== 0){
            context.moveTo(i + 3, i - 3)
            context.lineTo(i - 3, i + 3)
            context.font = "15px serif";
            context.fillText(`${count}`, i - 18, i + 18);
            count -= 5;
        }
    }

    context.stroke()
}

export const coordinateAxes = (context) => {
    context.translate(400, 250)
    context.rotate((Math.PI / 180) * -90);
    axes(context)
    triangleForCoordAxesY(context, 0,235);
    triangleForCoordAxesX(context, 375, 0);
    triangleForCoordAxesZ(context, -200, -200);
    circle(context, 0, 0, 0.5, "black");
    coordinate(context)
};
