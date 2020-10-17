import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DbConectionService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    }),
    responseType: 'text'
  };

  constructor(private http: HttpClient) { }

  getLogin(username:any, password:any):Observable<any> {
    const data = {
      user: username,
      pass: password
    };
    return this.http.post('http://localhost:4000/login', data, {headers:this.httpOptions.headers, responseType:'text'});
  }
}
