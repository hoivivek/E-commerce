import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperserviceService {
base = 'http://localhost:3000'
  constructor(private http:HttpClient) { }
  postUser(data:any){
    console.log(data)
    return this.http.post(this.base+'/api/postUserInfo', data)
  }
  getallUsers() {
    return this.http.get(this.base+'/api/getUserInfo')
  }
}
