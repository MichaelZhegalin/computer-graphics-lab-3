export const triangleForCoordAxesZ = (context, startingPointX, startingPointY) => {
    context.beginPath();
    context.moveTo(startingPointY + 30,startingPointX + 15);
    context.lineTo(startingPointY - 1,startingPointX - 2);
    context.lineTo(startingPointY + 15,startingPointX + 30);
    context.fill();
}