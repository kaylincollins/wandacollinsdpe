import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  firstName: string;
  middleName: string;
  lastName: string;
  phone: string;
  email: string;
  ftn: string;
  instructorName: string;
	instructorPhone: string;
	instructorEmail: string;
	date: string;
	time: string;
	airport: string;
	aircraft: string;
	rating: string;
	retest: string;
	discontinuance: string;
	payment: string;
	meetingLocation: string;
	tailNumber: string;
	submission: string;


  constructor() { }

  ngOnInit() {
  }

  submitForm() {
  	console.log(this.rating);
  }

}
