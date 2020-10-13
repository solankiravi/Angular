import { title } from 'process';


export class CoursesService{

    Courselist=[]

   
    getCourses(){
        for (let index = 0; index < 3; index++) {          
            this.Courselist.push(new Course("Course"+index,123,4.678,78.5,new Date(2020,10,11),false)) 
        }
        return this.Courselist;
    }

}

export class Course{

    constructor(private title?:string, private numberofstudents?:number, private rating?:number, private price?:number, private relaeasedate?:Date, public isFavourite?:boolean)
    {

    }
   
}