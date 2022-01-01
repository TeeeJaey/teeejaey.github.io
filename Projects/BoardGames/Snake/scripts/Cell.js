
class Cell
{
    constructor(i,j)
    {
        this.id = i+':'+j;
        this.x = i;
        this.y = j;
        
        this.isSnake = false;
        this.isFood = false;
        this.isDanger = false;
        
        this.initColor = "#bbb";
        this.currColor = "#bbb";
        
        return;
    }

    setClear = () => {
        this.isSnake = false;
        this.isFood = false;
        this.isDanger = false;
        this.currColor = "#bbb";
    }
    
    setDanger = () => {
        this.isFood = false;
        this.isDanger = true;
        this.currColor = "red";
    }
    
    setFood = () => {
        this.isDanger = false;
        this.isFood = true;
        this.currColor = "green";
    }
    
    setSnake = () => {
        this.isDanger = false;
        this.isFood = false;
        this.isFood = true;
        this.currColor = "#333";
    }
}
