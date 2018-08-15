import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
title = 'app';
myValue = '';
username;
private url = 'http://localhost:3000';
isUser = false;

constructor(chatService: ChatService, private http:HttpClient, private router:Router){

}
newUser(newstring: string) {
  interface User {
    success: string;
    username: string;
  }
  this.http.get<User>(this.url + "/api/auth?username="+newstring).subscribe(data => {
    if (data.success){
      //Is a valid user
      this.isUser = true;
      console.log(this.isUser);
      this.router.navigateByUrl('/groups');

    }
    else {
      // Not a valid user
      console.log("other");
    }
  });


  this.username = newstring;



  localStorage.setItem("username", newstring);
  this.myValue = "";
}
}
