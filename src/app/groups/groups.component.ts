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
  authSelected;
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
  //testArray: any[] = [];
  userData: any[] = [];
  tempData;
  //"Master Data Source"
  // data: any[] = [
  //   {
  //     'name': "Sport",
  //     'children':
  //     [
  //       {
  //         'name': "NRL"
  //       },
  //       {
  //         'name': "Basketball"
  //       },
  //       {
  //         'name': "Cricket"
  //       }
  //     ]
  //   },
  //   {
  //     'name': "Cooking",
  //     'children':
  //     [
  //       {
  //         'name': "Recipes"
  //       },
  //       {
  //         'name': "Nutrition"
  //       }
  //     ]
  //   }
  // ];
  constructor(private route:ActivatedRoute, private http: HttpClient, private router:Router,private form:FormsModule) { }
  //Just navigate without doing this, just use localStorage 🙃🙃🙃🙃🙃🙃🙃
  ngOnInit() {
    this.temp = localStorage.getItem('myData');
    console.log(this.temp);
    //this.temp2 =
    this.tempData = JSON.parse(this.temp);
    let otherData = JSON.parse(this.temp);

    this.tempData = this.tempData.groups;
    this.numGroups = this.tempData.length;

    console.log(otherData);
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
  goToChannel(channelName, groupName){
    console.log(channelName);
    localStorage.setItem('groupName', groupName);
    localStorage.setItem('channelName', channelName);

    this.router.navigateByUrl('/chat', { skipLocationChange: true });

  }

  populate(){

    // TODO: Maybe a post request to index.js to write to the user authData file. Currently the group is not being listed as
    //       The app thinks that the user does not have access to the group. The post request will update the authData.JSON
    //       file to include this group in the groups array.



    this.userData = [];
    let count = 0;
    console.log("Num groups = " + this.numGroups);
    for(let x =0;x<this.data.length;x++){
      for(let y=0;y<this.numGroups;y++){
        if(this.data[x].name == this.tempData[y]){
          //If this fires, it means that the group has been found from the "master data source"
          // Push that group into the user data array
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
          // this.data[i].children.push({'name': channelName});
        }
      }
    }
    console.log(this.data);
    localStorage.setItem('myData', JSON.stringify(this.userData));
    this.temp = localStorage.getItem('myData');
    console.log(this.temp);

  }

  newGroup(groupName){
    console.log(this.data);
    this.data.push(
      {
        'name': groupName,
        'children':[]
      }
    );

    console.log(groupName);
    this.numGroups++;
    //this.populate();

    console.log(this.data);
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
    //Post request here, as it will be only one variable to parse, rather than a object or array.

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

    //this.populate();
  }

  logout(){
    localStorage.clear();
    this.router.navigateByUrl('');
  }
  toggleAdd(){
    this.showVar = !this.showVar;
  }
  toggleRemove(){
    this.showVar2 = !this.showVar2;
  }
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
  removeUser(){
    this.http.get(this.url + "/api/delete?username="+this.removeUsername).subscribe(data => {
      console.log(data);
        if (data['success']){
          console.log("Deleted")
        }
        else{
          console.log("Error - A User With This Username Already Exists");
        }
    });
  }

}
