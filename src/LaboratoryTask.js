import {bilinearPlane} from "./bilinearPlane/BilinearPlane";
import {brokenLine} from "./bilinearPlane/BrokenLine";
import {FoolTest} from "./secondaryFunctions/FoolTest";
import {ExceedingCanvasCheck} from "./secondaryFunctions/ExceedingCanvasCheck ";

export const LaboratoryTask = (context, coordinateArr) =>{

    let bezierDotsX = [];
    let bezierDotsY = [];
    let bezierDotsZ = [];

    let bezierDotsXForTest = [];
    let bezierDotsYForTest = [];

    for(let i = 0; i < coordinateArr.length; i++){
        bezierDotsXForTest[i] = [coordinateArr[i].xCoordinate];
        bezierDotsYForTest[i] = [coordinateArr[i].yCoordinate];
        bezierDotsX[i] = Number(coordinateArr[i].xCoordinate)
        bezierDotsY[i] = Number(coordinateArr[i].yCoordinate)
        bezierDotsZ[i] = Number(coordinateArr[i].zCoordinate)
    }

    if(!FoolTest(bezierDotsXForTest, bezierDotsYForTest)){
        return
    }

    if(!ExceedingCanvasCheck(bezierDotsX, bezierDotsY, bezierDotsZ)){
        return
    }
    bilinearPlane(bezierDotsX, bezierDotsY, bezierDotsZ, context)
    brokenLine(context, bezierDotsX, bezierDotsY, bezierDotsZ)

}