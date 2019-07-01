import { Component, OnInit } from '@angular/core';
import { TasksService } from '../TaskServices/tasks.service';

@Component({
  selector: 'app-viewlist',
  templateUrl: './viewlist.component.html',
  styleUrls: ['./viewlist.component.css']
})
export class ViewlistComponent implements OnInit {

  Dutiess
  constructor(public taskservices : TasksService) { 
        this.Dutiess = this.taskservices.getDuties();
  }


  add(myjobs,myprio,mydate){
    this.taskservices.add(myjobs,myprio,mydate)
  }

   remove(jobs){
     this.taskservices.remove(jobs)
   }

   EditJobs(jobs){
     this.taskservices.EditJobs(jobs);
   }

  ngOnInit() {
  }

}
