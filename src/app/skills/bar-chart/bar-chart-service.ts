import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class barChartService {

  constructor(private http: HttpClient) { }
  skillsUrl = '../assets/skills.json';
  getSkills(){
    return this.http.get(this.skillsUrl);
  }
}