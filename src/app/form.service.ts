import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Concepts } from './concept';

@Injectable({
  providedIn: 'root'
})
export class FormService {


  url;
  constructor(private http:HttpClient) { }

  createNode(value){

    this.url="http://localhost:8080/create";
    console.log(value);
    return this.http.post(this.url,value);
  }

  getNodes():Observable<Concepts[]>{

    this.url="http://localhost:8080/getnodes";
    return this.http.get<Concepts[]>(this.url);
  }

}
