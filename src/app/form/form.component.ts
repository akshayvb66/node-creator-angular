import { Component, OnInit } from '@angular/core';
import { FormService } from '../form.service';
import { Observable } from 'rxjs';
import { Concepts } from '../concept';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private formService:FormService) { }

  ngOnInit() {
  
    this.getNodes1();	

  }

  allTracks=Observable;
  concepts: Observable<Concepts[]>;



  value: any;
  
  submit(form) {
    this.value = form; 
    console.log(this.value);
    this.formService.createNode(this.value)
    .subscribe(
      data => {
        console.log("POST Request is successful ", data);},
      error => {
        console.log("Error", error);}
    );
  }

  getNodes1(){


    // const conceptsobservable = this.formService.getNodes();
    // conceptsobservable.subscribe((conceptdata: Concepts[]) => {
    //     this.concepts = conceptdata;

    this.concepts = this.formService.getNodes();
    console.log(this.concepts);

}

}
