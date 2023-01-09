import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateUserComponent } from './components/User/create-user/create-user.component';
import { EditUserComponent } from './components/User/edit-user/edit-user.component';
import { ListUserComponent } from './components/User/list-user/list-user.component';



const routes: Routes = [
  
  {path: 'users', component: ListUserComponent},
  {path: 'users/create', component: CreateUserComponent},
  {path: 'users/edit/:id', component: EditUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
