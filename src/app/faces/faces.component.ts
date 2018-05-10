import { Component, OnInit } from '@angular/core';
import { MemberService } from './../services/member-service.service';

@Component({
  selector: 'app-our-faces',
  templateUrl: './faces.component.html',
  styleUrls: ['./faces.component.css']
})
export class FacesComponent implements OnInit {
  faces: any;
  clickedFaces: any;
  activeFace: any;
  unclickFaces(index){
    for(let t in this.clickedFaces){
      if(index !== parseInt(t)){
        this.clickedFaces[t] = false;
      }
    }
  };
  setOrUnsetFace(index){
    if(this.faces.indexOf(this.activeFace) === index){
      this.activeFace = null;
    }
    else{
      this.activeFace = this.faces[index];
    }
  }
  constructor(private memberService: MemberService) { }

  ngOnInit() {
    //retrieve from face service
    this.memberService.getFaces().subscribe(res => {
      this.faces = res;
      this.clickedFaces = new Array(this.faces);
      for(let i in this.clickedFaces){
        this.clickedFaces[i] = false;
      }
    });
  }

}
