import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { FirstLessonComponent } from './first-lesson/first-lesson.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstLessonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [FirstLessonComponent]
})
export class AppModule { }
