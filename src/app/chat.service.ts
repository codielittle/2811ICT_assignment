import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import * as io from 'socket.io-client';



@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private url = 'http://localhost:3000';
  private socket;


  constructor(private http:HttpClient) {
  this.socket = io(this.url);
  this.socket.emit('test', 'hello world');



  }
}
