import { Component, OnInit } from '@angular/core';
import { SocketService } from '../socket.service';
import { Router } from '@angular/router';
import {Location} from '@angular/common';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  username: string;
  messages=[];
  message = '';
  labMessages = [];
  groupName = '';
  connection;
  showVar: boolean = false;
  showVar2: boolean = false;
  channel_name = '';
  auth;
  removeUsername;
  addUsername;
  result;
  private url = 'http://localhost:3000';

  constructor(private sockServer: SocketService, private router:Router, private _location: Location, private http: HttpClient) { }

  ngOnInit() {
    //Get local data
    this.channel_name = localStorage.getItem('channelName');
    this.username = localStorage.getItem('username');
    this.groupName = localStorage.getItem('groupName');
    this.auth = Number(localStorage.getItem('auth'));

    console.log("Chat session started for user: " + this.username);
    //Get messages
    this.connection = this.sockServer.getMessages().subscribe(message=>{
        this.messages.push(message);
        this.message = '';

    });

    this.sockServer.joinChannel(this.channel_name);
  }

  sendMessage(){
    //Send message to socket service
    if(this.message != ''){
      this.sockServer.sendMessage('@' + this.username + ': ' + this.message);
    }




  }
  //Unsubscribe from connection
  ngOnDestroy(){
    if(this.connection){
      this.connection.unsubscribe();
    }
  }

  //Clear local storage and navigate back to the root
  logout(){
    localStorage.clear();
    this.router.navigateByUrl('');
  }
  //Toggles user remove form
  toggleRemove(){
    this.showVar = !this.showVar;
    if(this.showVar2){
      this.showVar2 = !this.showVar2;
    }

  }
  //Toggles user add form
  toggleAdd(){
    this.showVar2 = !this.showVar2;
    if(this.showVar){
      this.showVar = !this.showVar;
    }

  }
  //Sends a request to the server to add the specified user to the current group that is being viewed
  addUser(){
    this.http.get(this.url + "/api/adduser?username="+this.addUsername + "&group="+this.groupName).subscribe(data => {
      console.log(data);
        if (data['success']){
          this.result = "Success";
        }
        else{
          this.result = "Error";
        }
    });
  }
//Sends a request to the server to remove the specified user from the current group that is being viewed
  removeUser(){
    this.http.get(this.url + "/api/removeuser?username="+this.removeUsername + "&group="+this.groupName).subscribe(data => {
      console.log(data);
        if (data['success']){
          this.result = "Success";
        }
        else{
          this.result = "Error";
        }
    });

  }


}
