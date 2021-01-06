

class calculateJumpCount {

    output1 = 0;

    constructor(climbUp: number, climbDown: number, noOfWalls: number, wallHeights: number[]) {
        this.GetJumpCount(climbUp, climbDown, noOfWalls, wallHeights);
        console.log(this.output1);
    }

    GetJumpCount(climbUp: number, climbDown: number, noOfWalls: number, wallHeights: number[]) {
        while (noOfWalls > 0)
            this.output1 = this.getJumpAmount(climbUp, wallHeights[--noOfWalls], (climbUp - climbDown));
    }

    getJumpAmount(climbUp: number, hight: number, oneJump: number) {

        let returnVal;

        if (hight <= climbUp)
            returnVal = ++this.output1;
        else {
            ++this.output1;
            returnVal = this.getJumpAmount(climbUp, (hight - oneJump), oneJump);
        }

        return returnVal;
    }
}

new calculateJumpCount(5, 1, 2, [9, 10]);