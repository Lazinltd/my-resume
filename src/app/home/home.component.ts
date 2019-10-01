import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  img="assets/img/allD.jpeg";
  twitter="https://img.icons8.com/material-sharp/24/000000/twitter.png";
  facebook="https://img.icons8.com/material-sharp/24/000000/facebook-new.png";
  linkedIn="https://img.icons8.com/material-sharp/24/000000/linkedin.png";
  constructor() { }

  ngOnInit() {
  }

}
