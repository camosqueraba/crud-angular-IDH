import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';

import { UserService } from 'src/app/services/user-service/user.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  formCreateUser: FormGroup;

  constructor(
    public formUser:FormBuilder,
    private userService:UserService,
    private router:Router) {

    this.formCreateUser = this.formUser.group({
      nombre:[''],
      correo:[''],
      password:[''],
      rol:['']
    });
  }

  ngOnInit():void{

  }

  createUser():any {
    console.log('crearUsuario');
    console.log(this.formCreateUser.value);
    
    this.userService.createUser(this.formCreateUser.value).subscribe(response=>{
      console.log('Respuesta' + response);
    });
    
    //this.router.navigateByUrl('/users');
  }

}
