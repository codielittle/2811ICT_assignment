import { Component, OnInit } from '@angular/core';
import { SocketService } from '../socket.service';
import { AuthService } from '../auth.service';

import { Router } from '@angular/router';
import {Location} from '@angular/common';
import { HttpClient } from '@angular/common/http';
import * as io from 'socket.io-client';

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
  msgString;
  private url = 'http://localhost:3000';

  constructor(private authService: AuthService, private sockServer: SocketService, private router:Router, private _location: Location, private http: HttpClient) { }

  ngOnInit() {
    //Get local data
    this.channel_name = localStorage.getItem('channelName');
    this.username = localStorage.getItem('currentUser');
    this.groupName = localStorage.getItem('groupName');
    this.auth = Number(localStorage.getItem('user_auth'));
    console.log("Channel " + this.channel_name);
    console.log("Username " + this.username);
    console.log("Group " + this.groupName);
    console.log("Auth " + this.auth);
    console.log("Chat session started for user: " + this.username);
    //Get messages

    this.connection = this.sockServer.getMessages().subscribe(message=>{

        this.messages.push(message);
        this.message = '';
        console.log(this.messages);

    });

    this.sockServer.joinChannel(this.channel_name, this.username);
    this.getMsg();
  }

  getMsg(){
    this.authService.getMessages(this.channel_name).subscribe(
      data => {
        //console.log("SOMETHING HAS HAPPENED");
        //console.log(data['data']);
        this.messages = [];
        for(let i = 0;i<data['data'].length;i++){
          this.msgString = "@" + data['data'][i].username + ': ' + data['data'][i].message;
          this.messages.push({
            'type': "message",
            'text': this.msgString
          });
          this.msgString = '';
        }
      }
    )
  }

  sendMessage(){
    //Send message to socket service
    if(this.message != ''){
      this.sockServer.sendMessage('@' + this.username + ': ' + this.message);
    }
    this.authService.message(this.username, this.groupName, this.channel_name, this.message).subscribe(
      data=>{
        console.log("New Message");
      },
      error => {
        console.log("Error");
      }
    )
    console.log("MESSAGES ARRAY");
    console.log(this.messages);
    this.getMsg();
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
  back(){
    this.router.navigateByUrl('/groups?username=' + this.username, { skipLocationChange: true });
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
//Sends a request to the server to remove the specified user from the current channel that is being viewed
  removeUser(){
    this.http.get(this.url + "/api/delete?username="+this.removeUsername + "&group="+this.groupName + "&channel=" + this.channel_name).subscribe(data => {
      console.log(data);
        if (data['success']){
          this.result = "Success";
        }
        else{
          this.result = "Error";
        }
    });
    this.router.navigateByUrl('/groups/' + this.username, { skipLocationChange: true });

  }


}
