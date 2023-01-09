import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import{ Observable } from 'rxjs';

import { User } from './User';
import { CreateUserComponent } from 'src/app/components/User/create-user/create-user.component';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  API:string = 'https://prueba-tecnica-idecide.azurewebsites.net/api/usuarios/'

  constructor(private clientHttp:HttpClient) {}

  listUsers(){

    let response = this.clientHttp.get(this.API);
    //console.log('user servcie', response);
    return response;
  }
  
  getUserById(uid:any):Observable<any>{

    return this.clientHttp.get(this.API + uid);

  }
  
  updateUser(userData:User):Observable<any> {

    return this.clientHttp.put(this.API + userData.uid, userData);

  }
  
  createUser(userData:User):Observable<any> {

    return this.clientHttp.post(this.API, userData);

  }

  

  deleteUser(uid:any):Observable<any>{

    return this.clientHttp.delete(this.API + uid);

  }
   
}
