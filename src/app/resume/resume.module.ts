import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from '../material.module';
import { EducationComponent } from './components/education/education.component';
import { AboutComponent } from './components/about/about.component';
import { SummaryComponent } from './components/summary/summary.component';
import { TechnologiesComponent } from './components/technologies/technologies.component';



@NgModule({
  declarations: [
    HomeComponent,
    SidebarComponent,
    HeaderComponent,
    EducationComponent,
    AboutComponent,
    SummaryComponent,
    TechnologiesComponent
  ],
  imports: [
    CommonModule,
    
    RouterModule,MaterialModule,
    
  ],
  exports: [
    HomeComponent,
    SidebarComponent,
    HeaderComponent
  ]
})
export class ResumeModule { }
