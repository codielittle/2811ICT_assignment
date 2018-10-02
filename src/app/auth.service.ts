import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
export interface user {
  username: string;
  success: string;
  auth: any;
}

export interface content {
  username: string;
  group: string;
  success: string;
}

export interface channel {
  channelName: string;
  success: string;
  groupName: string;
}


// export interface user {
//   username: string;
//   success: number;
//   auth: any;
// }

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  data2: any;
  tempVar: any;
  result: any;
  private url = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  login(username: string, password: string){
    return this.http.post<user>('/api/auth', {username: username, password: password });
  }
  newUser(username: string, password: string, auth: number){
    return this.http.post<user>('/api/register', {username: username, password: password, auth: auth});
  }

  newChannel(channelname: string, groupname: string){
    return this.http.post<channel>('/api/newchannel', {group: groupname, channel: channelname });
  }
  
  newGroup(groupname: string){
    return this.http.post<channel>('/api/newgroup', {group: groupname});
  }

  addUser(username: string, channel: string, group: string){
    return this.http.post<content>('/api/adduser', {username: username, channel: channel, group: group});
  }

  fetch(username: string){
    console.log("FETCH!");
    return this.http.post<user>('/api/fetch', {username: username});

  }
  returnData(username: string){

    this.http.get(this.url + "/api/fetch?username="+username).pipe(map((res : any) => console.log("Testing" + res)));



  }
  something(){
    return this.http.get('/api/get').map(result => this.result = JSON.stringify(result));
  }

  getUserData(): Promise<any> {
    return this.http.get('/api/fetchdata')
      .toPromise()
      .then(response => JSON.stringify(response))
      .catch(Error);
  }
  getsomeData(){
    return this.http.get('/api/get').map((res:Response) => res);
  }
  getData(){
    var something = this.http.get('/api/get').map(response => console.log(response));
    return something;
  }
  somefunction(): Promise<any> {
    return this.http.get('/api/get')
    .toPromise()
    .then(response => JSON.stringify(response))
    .catch(Error);
    //.map((res : Response) => console.log("Testing " + JSON.stringify(res.json)));
  }
  message(username: string, group: string, channel: string, message: string){
    return this.http.post<content>('/api/message', {username: username, group: group, channel: channel, message: message });
  }
  getMessages(channel: string){
    return this.http.post<content>('/api/getmessages', {channel: channel});
  }
}
