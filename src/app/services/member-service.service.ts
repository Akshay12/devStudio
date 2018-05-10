import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private http: HttpClient) { }
  facesUrl = '../assets/data/members.json';
  getFaces(){
    return this.http.get(this.facesUrl);
  }
}
