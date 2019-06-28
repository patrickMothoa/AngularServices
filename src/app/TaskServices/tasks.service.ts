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

  constructor() {
   
   }
   getDuties(){

    return this.Duties; 
    }
   
}
