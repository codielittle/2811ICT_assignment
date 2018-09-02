import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {
  private url = 'http://localhost:3000';
  left_radioSelected;
  errorMessage;
  constructor(private http: HttpClient, private router:Router) { }
  data: any[] = [];
  fullData: any[] = [];
  //testData = ['Group', 'Group2', 'Group3', 'Group4', 'Group5', 'Group6'];
  ngOnInit() {
    let user = localStorage.getItem("targetUser");
    // TODO: Now gather all the groups the user is subscribed to and put that on the left, and gather the master list
    //       Of groups and list them on the right.

    //Get user's groups
    this.http.get(this.url + "/api/groups?username="+user).subscribe(
    res => {
      for(let k=0;k<res['groups'].length;k++){
        this.data.push(res['groups'][k]);
      }
      console.log(this.data);
    });

    this.http.get(this.url + "/api/getgroups").subscribe(
    res => {
      for(let k=0;k<res['groups'].length;k++){
        this.fullData.push(res['groups'][k]);
      }

    });
  }
  go(left, right){
    if(left == right){
      this.errorMessage = "The user is already in this group";
    }
  }
  logout(){
    localStorage.clear();
    this.router.navigateByUrl('');
  }

}
