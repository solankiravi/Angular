import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('sidebar') sidebarView: ElementRef;
  @ViewChild('maincontent') maincontentView: ElementRef;
  constructor() {};

  ngOnInit(): void {

  };
  ngAfterViewInit() {
    let sidebarwidth=this.sidebarView.nativeElement.width;
    
}

}
