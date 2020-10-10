class Point
{
    constructor(public x?:number, private y?:number){
    }

    draw(){
        console.log("X=> "+ this.x);
    }
}
let point = new Point(1,2)
// point.x=4; //value can be changed as it is public
// point.y=5; //we can not change point.y here as it is private
//to change the value we use properties - field as outside but method as internally
point.draw()
