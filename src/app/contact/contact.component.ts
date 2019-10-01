import { Component, OnInit } from '@angular/core';
import { FormControl, Validators  } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
	
    name: string = '';
	phone: number;
	

	msgArea: string = "";
	constructor(
		
	){ }

	ngOnInit(){
		
		
	}email = new FormControl('', [Validators.required, Validators.email]);

  getError() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

}
