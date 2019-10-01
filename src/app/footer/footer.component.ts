import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  
  twitter="https://img.icons8.com/color/48/000000/twitter.png";
  facebook="https://img.icons8.com/color/48/000000/facebook-new.png";
  linkedIn="https://img.icons8.com/color/48/000000/linkedin.png";
  
  constructor() { }

  ngOnInit() {
  }

}
