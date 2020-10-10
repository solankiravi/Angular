let a = 5
// a='a' //a can not be assigned as string as it is number type

let b: number;
let c: boolean; 
let d: string;
let e: any;
let f: number[] = [1,2,3] 
let g: any[] = [1,true,'a',false]


//Enums - Group related const values. It will show up in intellisense also.
const ColorRed = 0;
const ColorGreen=1;
const ColorBlue=2;

enum Color { Red, Green, Blue};
let bgcolor=Color.Green
