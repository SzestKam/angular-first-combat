import { Component, OnInit } from '@angular/core';
import { Student } from '../model/Student';
import {StudentService} from '../services/student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  private showFormVisible: boolean = false;

  temporaryStudent: Student = {firstName:'', lastName: '', indexNumber: 0};

  constructor(private studentSrv: StudentService) {}

  ngOnInit(): void {}

  getStudents(): Array<Student> {
    return this.studentSrv.getList();
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

  saveStudent(): void {
    this.studentSrv.save(this.temporaryStudent);
    this.hideForm();
    this.temporaryStudent = {firstName:'', lastName: '', indexNumber: 0};
  }

  deleteStudent(indexNumber: number): void {
    this.studentSrv.deleteBy(indexNumber);
  }

  editStudent(indexNumber: number): void {
    const st = this.studentSrv.getBy(indexNumber);
    this.temporaryStudent = Object.assign({}, st);
    this.showForm();
  }
}
