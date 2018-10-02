import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
  username: string;
  result = '';
  groupName;
  channelName;
  index;
  value;
  y;
  userObj;
  newUsername;
  newPwd;
  newAuth;
  //username;
  authSelected = 2;
  removeUsername;
  authLevels = [
    {
      "auth": "0",
      "authName": "Super Admin"
    },
    {
      "auth": "1",
      "authName": "Group Admin"
    },
    {
      "auth": "2",
      "authName": "Regular User"
    }
  ];

  showVar: boolean = false;
  showVar2: boolean = false;
  showVar3: boolean = false;

  numGroups: number;
  data: any[] = [];
  private url = 'http://localhost:3000';

  auth; // 0 = Super Admin, 1 = Group Admin, 2 = Regular
  user_data: any;
  temp;
  testVar;

  testArray;
  z: any;

  userData: any[] = [];
  tempData;
  x: any;
  groups = [];

  channels = [];
  groups2: any[] = [];

  constructor(private authservice: AuthService, private route:ActivatedRoute, private http: HttpClient, private router:Router,private form:FormsModule) {

  }
  //  1: Get groups that user is in
  //  2: Get channels within those groups
  ngOnInit() {
    this.auth = localStorage.getItem('user_auth');
    this.username = localStorage.getItem('currentUser');
    this.getUserData();

  }
  newUser(username: string, password: string, auth: number){
    this.authservice.newUser(username, password, auth).subscribe(data => {

    });
  }
  addChannel(){
    // TODO: post to 'credentials' & 'groups'
    // TODO: ensure that the data is refreshed to show new groups

  }

  // }
  //Navigate to a channel chat room on click
  goToChannel(channelName, groupName){

    localStorage.setItem('groupName', groupName);
    localStorage.setItem('channelName', channelName);

    console.log("GROUP " + groupName + " CHANNEL " + channelName);


    this.router.navigateByUrl('/chat', { skipLocationChange: true });

  }
  //Get data specific to that user - groups and also channels within that group.
  getUserData(){
    this.groups2 = [];
    this.http.get('/api/get?username='+this.username).subscribe(data => {
      this.user_data = data['data'];
      for(let i=0;i<this.user_data.length;i++){

        this.groups2.push(

          {
            'name': this.user_data[i].groupname,
            'channels': []
          }
      );
        for(let j=0;j<this.user_data[i].channels.length;j++){

          this.groups2[i].channels.push(
              {
                'name': this.user_data[i].channels[j]
              }
          );
        }

      }


    });
  }



  //Request is sent to the server with the username and the group name


  newChannel(channel: string, group: string){

    this.authservice.newChannel(channel, group).subscribe( data => {
        //console.log(typeof(data['success']));
        //this.result = data['success']
        if (data['success'] == "false"){
          console.log("MATCHES");
        }
        else if(data['success'] == "true"){
          console.log("Success");
        }
    });
    
    this.getUserData();

  }

  newGroup(group: string){
    this.authservice.newGroup(group).subscribe( data => {

    });

    this.getUserData();
  }

//Clears local storage and navigates back to the root
  logout(){
    localStorage.clear();
    this.router.navigateByUrl('');
  }
  //Toggles add form
  toggleAdd(){
    this.showVar = !this.showVar;
    this.result = " ";
    if(this.showVar2){
      this.showVar2 = !this.showVar2;
    }
    else if(this.showVar3){
      this.showVar3 = !this.showVar3;
    }
  }
  //Toggles user remove form
  toggleRemove(){
    this.showVar2 = !this.showVar2;
    this.result = " ";
    if(this.showVar){
      this.showVar = !this.showVar;

    }
    else if(this.showVar3){
      this.showVar3 = !this.showVar3;
    }
  }
  toggleGroup(){
    this.showVar3 = !this.showVar3;
    this.result = " ";
    if(this.showVar){
      this.showVar = !this.showVar;
    }
    else if(this.showVar2){
      this.showVar2 = !this.showVar2;
    }
  }
  //Takes in new user details and sends a request to the server to add a new employee
  // newUser(newUsername, newEmail){
  //   if(this.authSelected == undefined){
  //     this.result = "Error - Please Select An Auth Level";
  //     return;
  //
  //   }
  //
  //   this.http.post(this.url + "/api/reg?username="+newUsername + "&email="+newEmail + "&auth="+this.authSelected).subscribe(data => {
  //     console.log(data);
  //       if (data['success']){
  //         this.result = "Success - New User Added";
  //       }
  //       else{
  //         this.result = "Error - A User With This Username Already Exists";
  //       }
  //   });
  // }
  //Sends a request to the server to remove a user
  removeUser(){
    this.http.get(this.url + "/api/delete?username="+this.removeUsername).subscribe(data => {
      console.log(data);
        if (data['success']){
          this.result = "User " + this.removeUsername + " Has Been Deleted.";

        }
        else{
          this.result = "Error - No User With This Username Was Found";
        }
    });
  }

}
