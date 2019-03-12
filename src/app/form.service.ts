import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Concepts } from './concept';
import { Intents } from './intent';

@Injectable({
  providedIn: 'root'
})
export class FormService {


  url;
  _url;
  constructor(private http:HttpClient) { }

  createNode(value){

    this.url="http://localhost:8080/create";
    return this.http.post(this.url,value);
  }

  getNodes():Observable<Concepts[]>{

    this.url="http://localhost:8080/getnodes";
    return this.http.get<Concepts[]>(this.url);
  }

  getKnowledgeTerms():Observable<Intents[]>{
    this.url="http://localhost:8080/getIntentTerms/knowledge";
    return this.http.get<Intents[]>(this.url);
  }

  getComprehensionTerms():Observable<Intents[]>{
    this.url="http://localhost:8080/getIntentTerms/comprehension";
    return this.http.get<Intents[]>(this.url);
  } 
  getAnalysisTerms():Observable<Intents[]>{
    this.url="http://localhost:8080/getIntentTerms/analysis";
    return this.http.get<Intents[]>(this.url);
  }
   getApplicationTerms():Observable<Intents[]>{
    this.url="http://localhost:8080/getIntentTerms/application";
    return this.http.get<Intents[]>(this.url);
  }
   getSynthesisTerms():Observable<Intents[]>{
    this.url="http://localhost:8080/getIntentTerms/synthesis";
    return this.http.get<Intents[]>(this.url);
  } 
  getEvaluationTerms():Observable<Intents[]>{
    this.url="http://localhost:8080/getIntentTerms/evaluation";
    return this.http.get<Intents[]>(this.url);
  }
  getSynonyms(terms:String){

    this.url="http://localhost:8080/"+terms;
    return this.http.get<[]>(this.url);
  }

  addSynonym(intent:String,term:String,synonym:String,score:String){
    console.log(intent,term,synonym,score);
    this._url="http://localhost:8080/insertTerm/"+intent+"/"+term+"/"+synonym+"/"+score+"/";
    console.log(this._url);
    return this.http.get(this._url);
  }

}
