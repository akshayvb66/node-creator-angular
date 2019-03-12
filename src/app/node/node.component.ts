import { Component, OnInit } from '@angular/core';
import { FormService } from '../form.service';
import { Observable } from 'rxjs';
import { Intents } from '../intent';
import { MatDialog } from '@angular/material/dialog';
import { TermComponent } from '../term/term.component';

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
  openIntent: boolean;
  getTerms: boolean;
  terms:String;
  intents: Observable<Intents[]>;
  allTerms=[];
  bloomstack:string;


  constructor(private formService:FormService,public dialog: MatDialog) { }

  ngOnInit() {
  }

  onClickOpenForm(){
    this.openform=true;  
    }

  onClickOpenConceptForm(){
    this.openConcept=true;
  } 
  onClickgetTerms(){
    this.getTerms=true;
  }

  onClickOpenIntentForm(){
    this.openIntent=true;
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
  delete form.newAttributeProperty;
  delete form.newAttributeValue;
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
createIntent(form) {
  delete form.newAttributeProperty;
  delete form.newAttributeValue;
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



onClickShowKnowledge(){
  this.bloomstack="knowledge";
  this.intents = this.formService.getKnowledgeTerms();
  console.log(this.intents);
}
onClickShowSynthesis(){
  this.bloomstack="Synthesis";
  this.intents = this.formService.getSynthesisTerms();
  console.log(this.intents);
}
onClickShowComprehension(){
  this.bloomstack="Comprehension";
  this.intents = this.formService.getComprehensionTerms();
  console.log(this.intents);
}
onClickShowAnaylsis(){
  this.bloomstack="Analysis";
  this.intents = this.formService.getAnalysisTerms();
  console.log(this.intents);
}
onClickShowApplication(){
  this.bloomstack="Application";
  this.intents = this.formService.getApplicationTerms();
  console.log(this.intents);
}
onClickShowEvaluation(){
  this.bloomstack="Evaluation";
  this.intents = this.formService.getEvaluationTerms();
  console.log(this.intents);
}

// getSynonym(terms:String){

//   this.formService.getSynonyms(terms).subscribe((data) => {
//     this.allTerms=data;
//     console.log(this.allTerms);
// })
// }

openDialog(terms,bloomstack): void {
  console.log(terms);
  console.log(bloomstack);
  // const dialogRef = this.dialog.open(TermComponent, {
  //   width: '400px',
  //   data: {terms: this.terms}
  // });

  const dialogRef=this.dialog.open(TermComponent,{data:{term1:terms,intent:bloomstack}});

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
  });
}

}
