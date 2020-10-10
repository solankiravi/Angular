//by default - public

class Point
{
    /*
     x: number;
    private y: number;

    constructor(x?:number, y?:number){
        this.x = x;
       this.y = y;
    }
    */  

    //above code can be written like this - when you assign access modifier in constructor
    //param, it declares and auto assign its values
    constructor(public x?:number, private y?:number){
    }

    draw(){
        console.log("X=> "+ this.x);
    }
}
let point = new Point(1,2)
// point.x=4; //value can be changed as it is public
// point.y=5; //we can not change point.y here as it is private
point.draw()
