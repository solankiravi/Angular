import { SummaryComponent } from './resume/components/summary/summary.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './resume/components/about/about.component';
import { HomeComponent } from './resume/components/home/home.component';
import { EducationComponent } from './resume/components/education/education.component';
import { TechnologiesComponent } from './resume/components/technologies/technologies.component';

const routes: Routes = [
  {
    path: '',
    component:AboutComponent
  },
  {
    path: 'about',
    component:AboutComponent
  },
  {
    path: 'summary',
    component:SummaryComponent
  },
  {
    path: 'education',
    component:EducationComponent
  },
  {
    path: 'technologies',
    component:TechnologiesComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
