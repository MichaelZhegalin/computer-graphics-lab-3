export const ExceedingCanvasCheck = (bezierDotsX, bezierDotsY, bezierDotsZ) => {

    for(let i = 0; i < bezierDotsX.length; i++){
        if(bezierDotsX[i] > 25 || bezierDotsX[i] < -15){
            alert(`Точка ${i} выходит за границы оси Х!`)
            return false
        }
    }

    for(let i = 0; i < bezierDotsY.length; i++){
        if(bezierDotsY[i] > 39 || bezierDotsY[i] < -20){
            alert(`Точка ${i} выходит за границы оси Y!`)
            return false
        }
    }

    for(let i = 0; i < bezierDotsY.length; i++){
        if(bezierDotsZ[i] > 24 || bezierDotsZ[i] < -19){
            alert(`Точка ${i} выходит за границы оси Z!`)
            return false
        }
    }

    return true

}