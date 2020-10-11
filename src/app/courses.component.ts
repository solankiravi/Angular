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
            {{ course }}
        </li>
    </ul>
    <hr>
    <div (click)="onDivClicked()">
        <button class="btn btn-primary" id="clikemebtn" 
        [style.color]="isActive ? 'white' : 'red' "
        [class.active]=isActive
        (click)="onClick($event)" 
        >Click me</button>
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
    authors;
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
        $event.stopPropagation(); // Avoid event bublling
        alert("Button clicked");
        console.log($event);
    }
    onDivClicked()
    {
        console.log("Div is clicked");
    }

}