import { Component, OnInit } from '@angular/core';
import { FaceService } from './face-service.service';

@Component({
  selector: 'our-faces',
  templateUrl: './faces.component.html',
  styleUrls: ['./faces.component.css']
})
export class FacesComponent implements OnInit {
  faces: any;
  constructor(private faceService: FaceService) { }

  ngOnInit() {
    //retrieve from face service
    this.faceService.getFaces().subscribe(res => {this.faces = res});
  }

}
