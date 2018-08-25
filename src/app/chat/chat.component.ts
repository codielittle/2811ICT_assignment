import { Component, OnInit } from '@angular/core';
import { SocketService } from '../socket.service';
import { Router } from '@angular/router';
import {Location} from '@angular/common';
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
  channel_name = '';
  auth;


  constructor(private sockServer: SocketService, private router:Router, private _location: Location) { }

  ngOnInit() {
    this.channel_name = localStorage.getItem('channelName');
    this.username = localStorage.getItem('username');
    this.groupName = localStorage.getItem('groupName');
    this.auth = Number(localStorage.getItem('auth'));
    //this.auth = Number(this.auth);
    console.log("Chat session started for user: " + this.username);

    this.connection = this.sockServer.getMessages().subscribe(message=>{
        this.messages.push(message);
        this.message = '';

    });

    this.sockServer.joinChannel(this.channel_name);
  }

  sendMessage(){

    if(this.message != ''){
      this.sockServer.sendMessage('@' + this.username + ': ' + this.message);
    }






    var result = this.message.split(":");
    // var user = result[0];
    // var messageContent = result[1];
    // user = user.substr(1);
    console.log(" - " + result[1]);

  }

  ngOnDestroy(){
    if(this.connection){
      this.connection.unsubscribe();
    }
  }
  openConfig(test){
    var result = test.split(":");
    var user = result[0];
    var messageContent = result[1];
    user = user.substr(1);
    console.log(" - " + user + "  -  " + messageContent);

    localStorage.setItem("targetUser", user);
    this.router.navigateByUrl('/config', { skipLocationChange: true });


  }
  deleteChannel(){
    //Will do a request to the route api/deletehannel. Will pass the channel name as a param.
    //Will navigate user back to group list <---- maybe do this first if it's causing errors.
  }
  logout(){
    localStorage.clear();
    this.router.navigateByUrl('');
  }


}
