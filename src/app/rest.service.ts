import { ActivatedRoute, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RestService {
  endpoint = `http://localhost:8080/worldbank`;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };  

  constructor(private http: HttpClient,private route: ActivatedRoute) { }

  getCountry(id: string): Observable<any> {
    return this.http.get<any>(this.endpoint + '/' + id);
  }
}
