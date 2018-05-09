import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FaceService {

  constructor(private http: HttpClient) { }
  facesUrl = '../assets/faces.json';
  getFaces(){
    return this.http.get(this.facesUrl);
  }
}
