import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
export interface User {
  username: string;
  success: number;
  auth: any;
}
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
myPwd;
constructor(private authService: AuthService, private chatService: ChatService, private http:HttpClient, private router:Router){

}
login() {
  // TODO: THis needs to be moved to a new auth service. As per http video.
  // return this.http.post<User>('/api/auth', {username: "Codie", password: "test"});
  if(this.myValue == '' || this.myPwd == null){
    this.errorMessage = "Both fields are required";
    return;
  }

  this.authService.login(this.myValue, this.myPwd).subscribe(
    data=>{
      console.log(data);
      if(data.success){

        localStorage.setItem('user_auth', data.auth);
        localStorage.setItem('currentUser', this.myValue);

        this.router.navigateByUrl('/groups/' + this.myValue, { skipLocationChange: true });
      }
      else{
        this.errorMessage = "Username or Password is Incorrect";
      }


    },
    error => {
      console.log("Error");
    }
  )

}


}
