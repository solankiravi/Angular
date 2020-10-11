import { Component } from '@angular/core'
import { CoursesService } from './courses.service';
import { AuthorService } from './author.service';

@Component({
    selector: 'courses',
    template: `

    

    <h2>{{ "Title :"+ gettitle() }} </h2>
    <br/>
    <ul>
        <li *ngFor="let course of courses">
            {{ course.title | uppercase }} ||
            {{ course.numberofstudents | number }} ||
            {{ course.rating | number:'1.1-1' }} ||
            {{ course.price | currency: 'INR' }} ||
            {{ course.relaeasedate | date:'shortDate' }}
        </li>
    </ul>
    <hr>
    <div (click)="onDivClicked()" >

        <input [(ngModel)]="authorname" (keyup.enter)="onEnter()"  />

        <button class="btn btn-primary" id="clikemebtn" 
        [style.color]="isActive ? 'white' : 'red' "
        [class.active]=isActive
        (click)="onClick($event)" 
        >Save</button>
    </div>
    <h2>{{ "Author List :"}} </h2>
    <br/>
    <ul>
        <li *ngFor="let author of authors">
            {{ author }}
        </li>
    </ul>
    
    `
})
export class CoursesComponent {

    title="List of courses";
    isActive= false;
    courses;
    authorname=""
    authors=[];
    //injecting the dependency in the constructor
    constructor(service: CoursesService,private authorService:AuthorService){
        this.courses = service.getCourses();
        this.authors = authorService.getauthor();
    }

    gettitle(){
        return this.title;
    }
    onClick($event)
    {
        this.authors.push(this.authorname);
        console.log(this.authorname);
        $event.stopPropagation(); // Avoid event bublling
    }
    onDivClicked()
    {
        console.log("Div is clicked");
    }
    onEnter(){
    this.authors.push(this.authorname);
    console.log(this.authorname)

    }

}