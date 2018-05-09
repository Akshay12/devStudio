import { Component, OnInit } from '@angular/core';
import { FaceService } from './face-service.service';

@Component({
  selector: 'our-faces',
  templateUrl: './faces.component.html',
  styleUrls: ['./faces.component.css']
})
export class FacesComponent implements OnInit {
  faces: any;
  clickedFaces: any;
  unclickFaces(index) {
    for (let t in this.clickedFaces) {
      if (index !== parseInt(t)) {
        this.clickedFaces[t] = false;
      }
    }
  }
  constructor(private faceService: FaceService) {}

  ngOnInit() {
    // retrieve from face service
    this.faceService.getFaces().subscribe(res => {
      this.faces = res;
      if (res !== undefined && res.length > 0) {
        this.clickedFaces = new Array(res.length);
        for (var i in this.clickedFaces) {
          this.clickedFaces[i] = false;
        }
      }
    });
  }
}
