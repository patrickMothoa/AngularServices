import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ViewlistComponent } from './viewlist/viewlist.component';

const routes: Routes = [{path: 'register', component: RegisterComponent },
{path: 'viewlist' , component: ViewlistComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
