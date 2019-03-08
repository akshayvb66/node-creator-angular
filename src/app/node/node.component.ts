import { Component, OnInit } from '@angular/core';
import { FormService } from '../form.service';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.css']
})
export class NodeComponent implements OnInit {
  openform: boolean;
  openConcept: boolean;
  openProperty: boolean;
  value: any;

  constructor(private formService:FormService) { }

  ngOnInit() {
  }

  onClickOpenForm(){
    this.openform=true;  
    }

  onClickOpenConceptForm(){
    this.openConcept=true;
  } 
  
  showProprties(){
    this.openProperty=true;
  }


  private fieldArray: Array<any> = [];
  private newAttribute: any = {};

  addFieldValue() {
      this.fieldArray.push(this.newAttribute)
      this.newAttribute = {};
  }

  deleteFieldValue(index) {
    this.fieldArray.splice(index, 1);
}

addLastProperty(){
  this.fieldArray.push(this.newAttribute);
}

createNode(form) {
  console.log(form.newAttributeProperty);
  console.log(form.newAttributeProperty);
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


}
