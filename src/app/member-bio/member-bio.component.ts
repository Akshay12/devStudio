import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-member-bio',
  templateUrl: './member-bio.component.html',
  styleUrls: ['./member-bio.component.css']
})
export class MemberBioComponent implements OnInit {
  @Input('selectedBio') bio: any;
  constructor() { }

  ngOnInit() {
  }

}
