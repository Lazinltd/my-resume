import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ability',
  templateUrl: './ability.component.html',
  styleUrls: ['./ability.component.css']
})
export class AbilityComponent implements OnInit {

  star = "https://img.icons8.com/small/16/000000/star.png";
  starUrl = "assets/img/star_white_12x12.png";
  twitter="https://img.icons8.com/material-sharp/24/000000/twitter.png";
  facebook="https://img.icons8.com/material-sharp/24/000000/facebook-new.png";
  linkedIn="https://img.icons8.com/material-sharp/24/000000/linkedin.png";

  constructor() { }

  ngOnInit() {
  }

}
