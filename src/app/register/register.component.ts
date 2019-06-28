import { Component, OnInit } from '@angular/core';
import { TasksService } from '../TaskServices/tasks.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  Dutiess
  constructor(public taskservices : TasksService ) { 
        this.Dutiess = this.taskservices.getDuties();
  }


  add(myjobs,myprio,mydate){
     this.taskservices.add(myjobs,myprio,mydate)
   }

  remove(jobs){
    this.taskservices.remove(jobs)
  }
  ngOnInit() {
  }

}
