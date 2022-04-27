import {Injectable, OnInit} from '@angular/core';
import {Student} from '../model/Student';
import {HttpClient} from '@angular/common/http';
import {Observable, tap} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private students: Array<Student> = [];

  private readonly baseUrl = 'https://angular-f9286-default-rtdb.europe-west1.firebasedatabase.app/students';

  constructor(private httpClient: HttpClient) {}

  getList(): Array<Student> {
    this.refreshFromRemote();
    return this.students;
  }

  save(newStudent: Student): Observable<Student> {
    const url = this.baseUrl + '/' + newStudent.indexNumber + '.json';
    return this.httpClient
      .put<Student>(url, JSON.stringify(newStudent));
  }

  deleteBy(indexNumber: number): Observable<Student> {
    const url = this.baseUrl + '/' + indexNumber + '.json';
    return this.httpClient.delete<Student>(url);
  }

  getBy(indexNumber: number): Student {
    return this.students.filter(s => s.indexNumber === indexNumber)[0];
  }

  private refreshFromRemote(): void {
    this.students = [];
    const url = this.baseUrl + '.json';
    this.httpClient.get(url)
      .pipe(
        tap(value => {
          const myArr = Object.values(value);
          myArr.forEach(item => {
            this.students.push(item as Student);
          })
        }),
      )
      .subscribe();
  }
}
