import { Component } from '@angular/core'
import { CoursesService, Course } from './courses.service';
import { AuthorService } from './author.service';

@Component({
    selector: 'courses',
    template: `

    <h2>{{ "Title :"+ gettitle() }} </h2>
    <br/>
    {{ text | summary:10 }}
    <br/>
    <ul>
    <span class="glyphicon glyphicon-star"></span>
        <li *ngFor="let course of courses">
            {{ course.title | uppercase }} ||
            {{ course.numberofstudents | number }} ||
            {{ course.rating | number:'1.1-1' }} ||
            {{ course.price | currency: 'INR' }} ||
            {{ course.relaeasedate | date:'shortDate' }} ||
            
            <span class="fa" (click)="course_fav_clicked(course)"
            [class.fa-star]="course.isFavourite"
            [class.fa-star-o]="!course.isFavourite"
            >
            </span>
            {{ course.isFavourite }}
            <favourite [isFavorite]="post.isFavorite" (click)="favclicked()" ></favourite>
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
    isFavourite:boolean;
    text=`
    Hi, This is a long paragraph but i will use summary pipe here. It is a custom pipe to show first 50 words.
    `
    isActive= false;
    courses;
    authorname=""
    authors=[];
    post={
        titles: "Title",
        isFavourite: true
    }
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
    coursefavclicked(course:any)
    {
        console.log(course)
    }
    course_fav_clicked(course: Course)
    {
        course.isFavourite = ! course.isFavourite
            console.log(course.isFavourite)

    }
    favclicked()
    {
        this.post.isFavourite = ! this.post.isFavourite
        console.log('course component fav clicked')
    }

}