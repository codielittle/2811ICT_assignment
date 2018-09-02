import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

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
  userObj;
  newUsername;
  newEmail;
  newAuth;
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
  numGroups: number;
  data: any[] = [];
  private url = 'http://localhost:3000';

  auth; // 0 = Super Admin, 1 = Group Admin, 2 = Regular

  temp;

  userData: any[] = [];
  tempData;

  constructor(private route:ActivatedRoute, private http: HttpClient, private router:Router,private form:FormsModule) { }
  //Just navigate without doing this, just use localStorage 🙃🙃🙃🙃🙃🙃🙃
  ngOnInit() {
    this.temp = localStorage.getItem('myData');
    this.tempData = JSON.parse(this.temp);
    let otherData = JSON.parse(this.temp);

    this.tempData = this.tempData.groups;
    this.numGroups = this.tempData.length;


    this.auth = Number(otherData.auth);
    localStorage.setItem("auth", (this.auth));
    // I now have the groups which the user has access to / is subscribed to.
    this.username = this.route.snapshot.params['username'];



    this.http.get(this.url + "/api/getdata").subscribe(
    res => {

        for(let k=0;k<res['data'].length;k++){
          this.data.push(res['data'][k]);
          console.log(res['data'][k]);
        }
        let response = res;

        localStorage.setItem("dataSource", JSON.stringify(this.data));
        let testThing = localStorage.getItem("dataSource");

        this.populate(); //Will only display groups which the user has access to.

        // TODO: Get full data source -- Get user's subscribed groups -- Filter through full data source and disregard any data
        //that does not relate to the specific user. -- On new group: update dataSource && authData.json to add the group to the
        //users list.

    });

  }
  //Navigate to a channel chat room on click
  goToChannel(channelName, groupName){
    console.log(channelName);
    localStorage.setItem('groupName', groupName);
    localStorage.setItem('channelName', channelName);
    localStorage.setItem('auth', this.auth);

    this.router.navigateByUrl('/chat', { skipLocationChange: true });

  }

  //After a new channel or group is added, this function will be called to loop through and make sure all the local data is
  //up to date and correct.
  populate(){




    this.userData = [];
    let count = 0;
    console.log("Num groups = " + this.numGroups);
    for(let x =0;x<this.data.length;x++){
      for(let y=0;y<this.numGroups;y++){
        if(this.data[x].name == this.tempData[y]){
          //If this fires, it means that the group has been found from the "master data source"
          // Push that group into the user data array to be displayed
          this.userData.push(
            {
              'name': this.data[x].name,
              'children':[]
            }
          );


          for(let j = 0;j<this.data[x].children.length;j++){


            this.userData[count].children.push({'name': this.data[x].children[j].name});

          }
          count++;

        }
      }
    }
    console.log(this.data);
    localStorage.setItem('myData', JSON.stringify(this.userData));
    this.temp = localStorage.getItem('myData');
    console.log(this.temp);

  }

  //Request is sent to the server with the username and the group name
  newGroup(groupName){
    console.log(this.data);
    this.data.push(
      {
        'name': groupName,
        'children':[]
      }
    );


    this.numGroups++;


    this.userData.push(
      {
        'name': groupName,
        'children': []
      }
    );
    this.http.get(this.url + "/api/update?username="+this.username + "&groupname="+groupName).subscribe(
    res => {
        const response = res;
        console.log(response);
    });


    localStorage.setItem('myData', JSON.stringify(this.userData));
    let test = localStorage.getItem("myData");
    console.log(test);


  }

  newChannel(channelName, indexFinder){
    for(let i=0;i<this.data.length;i++){
      // Will find which index the group is located in the MASTER DATA SOURCE
      if(this.data[i].name == indexFinder){
        this.data[i].children.push({'name': channelName});


      }
    }
    for(let k=0;k<this.userData.length;k++){
      // Will find which index the group is located in the USER DATA SOURCE
      if(this.userData[k].name == indexFinder){
        this.userData[k].children.push({'name': channelName});

      }
    }
    this.http.get(this.url + "/api/newchannel?username="+this.username + "&groupname=" +indexFinder + "&channelname="+channelName).subscribe(
    res => {
        const response = res;
        console.log(response);
    });

    //this.populate();
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
  }
  //Toggles user remove form
  toggleRemove(){
    this.showVar2 = !this.showVar2;
    this.result = " ";
    if(this.showVar){
      this.showVar = !this.showVar;
    }
  }
  //Takes in new user details and sends a request to the server to add a new employee
  newUser(newUsername, newEmail){
    if(this.authSelected == undefined){
      this.result = "Error - Please Select An Auth Level";
      return;

    }

    this.http.get(this.url + "/api/reg?username="+newUsername + "&email="+newEmail + "&auth="+this.authSelected).subscribe(data => {
      console.log(data);
        if (data['success']){
          this.result = "Success - New User Added";
        }
        else{
          this.result = "Error - A User With This Username Already Exists";
        }
    });
  }
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
