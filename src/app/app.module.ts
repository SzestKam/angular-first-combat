import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FirstLessonComponent} from './first-lesson/first-lesson.component';
import {HomePageComponent} from './home-page/home-page.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from './app.routes';
import {ErrorComponent} from './error/error.component';
import {StudentsComponent} from './students/students.component';
import {EmailPipe} from './pipes/email.pipe';
import {HttpClientModule} from '@angular/common/http';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentNewComponent } from './student-new/student-new.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    FirstLessonComponent,
    HomePageComponent,
    ErrorComponent,
    StudentsComponent,
    EmailPipe,
    StudentDetailsComponent,
    StudentNewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [HomePageComponent]
})
export class AppModule {
}
