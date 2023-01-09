import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {FormGroup, FormBuilder} from '@angular/forms';
import { UserService } from 'src/app/services/user-service/user.service';
import { User } from 'src/app/services/user-service/User';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent  implements OnInit {
  
  formEditUser:FormGroup;
  userId:any;
  Users:any;
  //userData:User;

  constructor(
    private activeRoute: ActivatedRoute,
    private userService: UserService,
    private formUser: FormBuilder
    ){
     
      this.userId = this.activeRoute.snapshot.paramMap.get('id');
      
      console.log('usuario Id', this.userId);

      this.userService.listUsers().subscribe(users_response =>{
        //console.log('Lista Usuarios' , users_response);
        this.Users = users_response;
        let userfind = this.findUserById(this.Users);
        console.log('usuario', userfind);
        
         this.formEditUser.setValue({
          uid: userfind.uid,
          nombre: userfind.nombre,
          correo: userfind.correo,
          password: null,
          rol: userfind.rol
        }); 

      });

      this.formEditUser = this.formUser.group({
        uid:[''],
        nombre:[''],
        correo:[''],
        password:[''],
        rol:['']
      });

      //console.log('respuesta', this.Users);  
      //let userfind = this.findUserById(this.Users);
      
      
    }
  
    ngOnInit(): void {      
    }

    editUser():any {
      console.log('editarUsuario');
      console.log('data usuario', this.formEditUser.value);
      
      this.userService.updateUser(this.formEditUser.value).subscribe(response=>{
        console.log('Respuesta' + response );
      });
      
      //this.router.navigateByUrl('/users');
    }
 

  findUserById(userData: any): User{

    //console.log(userData);
    let userFind: User = new User();

    userData.usuarios.forEach((user: User) => {
      //console.log(user);
      if (user.uid === this.userId)
        userFind = user;
    });

    console.log('Usuario encontrado' , userFind);  
    return userFind;
    
  }

}
