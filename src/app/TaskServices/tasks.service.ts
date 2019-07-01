import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  
  Duties = [{itemName: ' breakfast invite', itemPriority: 'High', Date : '2019-01-01'},
   {itemName: ' My birth day', itemPriority: 'Low', Date : '2019-03-01'},
   {itemName: ' Soccer Match', itemPriority: 'Medium', Date : '2019-04-01'}]
   
   myjobs: string = "";
   myprio: string = "";
   mydate: string = "";
   
   editduty: string = "";
   editPrio: string = "";
   editDate: string = "";

   add(myjobs,myprio,mydate){
    this.Duties.push({itemName: myjobs, itemPriority: myprio, Date: mydate});

    this.myjobs = "";
    this.myprio = "";
    this.mydate = "";
  }

  remove(jobs){
    let index =this.Duties.indexOf(jobs)
    this.Duties.splice(index, 1);
  }

  EditJobs(jobs){
    let index = this.Duties.indexOf(jobs)
    this.Duties[index].itemName = prompt("Edit task:");
    this.Duties[index].itemPriority = prompt("Edit Priority:");
    this.Duties[index].Date = prompt("Edit Date")

    // this.Duties[index].itemName = this.editduty;
    // this.Duties[index].itemPriority = this.editPrio;
    // this.Duties[index].Date = this.editDate;
  }

  constructor() {
   
   }
   getDuties(){

    return this.Duties; 
    }
   
}
