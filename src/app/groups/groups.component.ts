import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
  username: string;
  data: any[] = [
    {
      'name': "Sport",
      'children':
      [
        {
          'name': "NRL"
        },
        {
          'name': "Basketball"
        }
      ]
    },
    {
      'name': "Cooking",
      'children':
      [
        {
          'name': "Recipes"
        },
        {
          'name': "Nutrition"
        }
      ]
    }
  ]
  constructor(private route:ActivatedRoute) { }
  //Just navigate withoit doing this, just use localStorage 🙃🙃🙃🙃🙃🙃🙃
  ngOnInit() {
    this.username = this.route.snapshot.params['username'];
    console.log(this.username);
  }


}
