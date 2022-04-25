import { Component, OnInit } from '@angular/core';
import { Student } from '../model/Student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  private students: Array<Student> = [];
  private showFormVisible: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.students = [
      {
        firstName: 'Jan',
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

  getStudents(): Array<Student> {
    return this.students;
  }

  isVisibleForm(): boolean {
    return this.showFormVisible;
  }

  showForm(): void {
    this.showFormVisible = true;
  }

  hideForm(): void {
    this.showFormVisible = false;
  }
}
