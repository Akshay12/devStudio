import { Component, OnInit } from '@angular/core';
import { FaceService } from './face-service.service';
@Component({
  selector: 'app-our-faces',
  templateUrl: './faces.component.html',
  styleUrls: ['./faces.component.css']
})
export class FacesComponent implements OnInit {
  faces: any;
  clickedFaces: any;

  constructor(private faceService: FaceService) {}

  unclickFaces(index) {
    for (const t in this.clickedFaces) {
      if (index !== parseInt(t, null)) {
        this.clickedFaces[t] = false;
      }
    }
  }

  ngOnInit() {
    // retrieve from face service
    this.faceService.getFaces().subscribe(res => {
      this.faces = res;
      if (this.faces !== undefined && this.faces.length > 0) {
        this.clickedFaces = new Array(this.faces.length);
        for (let i = 0; i < this.faces.length; i++) {
          this.clickedFaces[i] = false;
        }
      }
    });
  }
}
