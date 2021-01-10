import { SharedModule } from './Shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { CoreModule } from './core/core.module';
import { ResumeModule } from './resume/resume.module';



@NgModule({
  declarations: [
  
    AppComponent,

  ],
  imports: [
    CoreModule,
    SharedModule,
    ResumeModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule
    
  ],
  providers: [
    //all the depency should be mentioned here


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
