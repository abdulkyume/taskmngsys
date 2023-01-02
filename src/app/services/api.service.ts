import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUri: string = 'http://localhost:5002/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) {}

  addtasks(data: any) {
    if (localStorage.getItem('alltasks') == null) {
      const d = new Array();
      d.push(data);
      localStorage.setItem('alltasks', JSON.stringify(d));
    } else {
      const alltask = JSON.parse(localStorage.getItem('alltasks')!);
      alltask.push(data);
      localStorage.setItem('alltasks', JSON.stringify(alltask));
    }
  }

  gettasks() {
    const alltask = localStorage.getItem('alltasks') || '';
    return JSON.parse(alltask);
  }
}
