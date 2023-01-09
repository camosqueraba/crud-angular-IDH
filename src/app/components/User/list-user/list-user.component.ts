import { Component, OnInit } from '@angular/core';


import { UserService } from 'src/app/services/user-service/user.service';



@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})

export class ListUserComponent implements OnInit {

  Users:any;

  constructor(private userService:UserService){  }
  
  ngOnInit(): void{
    this.userService.listUsers().subscribe(users_response =>{
      console.log(users_response);
      this.Users = users_response;
    });
  }

  deleteUser(uid:any, iControl:any){

    console.log(uid);
    console.log(iControl);

    this.userService.deleteUser(uid).subscribe(delete_response =>{
      console.log(delete_response);
      this.Users.splice(iControl,1);
      
    });

  }
}
