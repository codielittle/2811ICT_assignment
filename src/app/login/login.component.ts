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
username = 'Codie';
private url = 'http://localhost:3000';
isUser = false;
errorMessage = "";
constructor(chatService: ChatService, private http:HttpClient, private router:Router){

}
loginUser(userString: string) {
  //returns the user interface from server get request
  interface User {
    success: string;
    username: string;
    auth: number;
  }
  this.http.get<User>(this.url + "/api/auth?username="+userString).subscribe(data => {
    if (data.success){

      //Is a valid user
      this.isUser = true;
      localStorage.setItem('myData', JSON.stringify(data));

      this.router.navigateByUrl('/groups/' + userString, { skipLocationChange: true });
      //Navigate to the groups component

    }
    else {
      this.errorMessage = "Username is not registered";
      // Not a valid user
      console.log("other");
    }
  });
  this.username = userString;
  localStorage.setItem("username", userString);
  this.myValue = "";
}
}
