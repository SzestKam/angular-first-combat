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
  private showDetailsVisible: boolean = false;
  private data: Array<Student> = [];

  temporaryStudent: Student = {firstName:'', lastName: '', indexNumber: 0};

  constructor(private studentSrv: StudentService) {}

  ngOnInit(): void {
    this.data = this.studentSrv.getList();
  }

  getStudents(): Array<Student> {
    return this.data;
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

  isDetailsForm(): boolean {
    return this.showDetailsVisible;
  }

  showDetails(): void {
    this.showDetailsVisible = true;
  }

  hideDetails(): void {
    this.showDetailsVisible = false;
    this.temporaryStudent = {firstName:'', lastName: '', indexNumber: 0};
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

  detailsStudent(indexNumber: number):void {
    this.showDetails();
    this.temporaryStudent = this.studentSrv.getBy(indexNumber);
  }
}
