import { Routes } from '@angular/router';
import { FirstLessonComponent } from './first-lesson/first-lesson.component';
import { ErrorComponent } from './error/error.component';
import { StudentsComponent } from './students/students.component';
import {JokesComponent} from './jokes/jokes.component';

export const appRoutes: Routes = [
  { path: 'home', component: FirstLessonComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'jokes', component: JokesComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: ErrorComponent }
];
