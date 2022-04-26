import { Injectable } from '@angular/core';
import {Student} from '../model/Student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private students: Array<Student> = [];
  constructor() {
    this.students = [
      {
        firstName: 'Janusz',
        lastName: 'Kowalski',
        indexNumber: 2233
      },
      {
        firstName: 'Janina',
        lastName: 'Nowak',
        indexNumber: 5533,
        email: 'janina@nowak.pl'
      },
      {
        firstName: 'Roman',
        lastName: 'Nowak',
        indexNumber: 5555,
        email: 'rnowak@example.pl'
      }
    ];
  }

  getList(): Array<Student> {
    return this.students;
  }

  save(newStudent: Student): void {
    this.deleteBy(newStudent.indexNumber);
    this.students.push(Object.assign({}, newStudent));
  }

  deleteBy(indexNumber: number): void {
    this.students = this.students.filter(st => st.indexNumber !== indexNumber);
  }

  getBy(indexNumber: number): Student {
    return this.students.filter(s => s.indexNumber === indexNumber)[0];
  }
}
