import { Component } from "@angular/core"

@Component({
  selector:'[app-student]',
  templateUrl:'./student.component.html',
  styleUrls: ['./student.component.css']

})

export class StudentComponent {
  studentName : string = 'Anthony';
  allowAdd : boolean = false;
  studentAddStatus : string = 'No student added';
  studentAdded : boolean = false;

  constructor(){
    console.log(this.studentAdded);
  }

  onUpdateStudentName(ev:Event){
    this.studentName = (<HTMLInputElement>ev.target).value;
  };

  onUpdateStudentNameEvent(ev:Event){
    this.studentName = (<HTMLInputElement>ev.target).value; // <HTMLInputElement> is to typecast the event target into an html input element
    console.log(ev);

    if((<HTMLInputElement>ev.target).value == ''){
      this.allowAdd = false;
    }else{
      this.allowAdd = true;
    }

  }

  onAddStudentClick = () => {
    this.studentAddStatus = 'Student added';
    this.allowAdd = false;
    this.studentAdded = true
  }


}
