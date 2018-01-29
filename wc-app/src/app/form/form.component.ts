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
	examDetails = {};


  constructor() { }

  ngOnInit() {
  }

  submitForm() {
  	this.examDetails = {
  		firstName: this.firstName,
		  middleName: this.middleName,
		  lastName: this.lastName,
		  phone: this.phone,
		  email: this.email,
		  ftn: this.ftn,
		  instructorName: this.instructorName,
			instructorPhone: this.instructorPhone,
			instructorEmail: this.instructorEmail,
			date: this.date,
			time: this.time,
			airport: this.airport,
			aircraft: this.aircraft,
			rating: this.rating,
			retest: this.retest,
			discontinuance: this.discontinuance,
			payment: this.payment,
			meetingLocation: this.meetingLocation,
			tailNumber: this.tailNumber,
			submission: this.submission,
  	};
  	console.log(this.examDetails);
  	this.clearForm();
  }

  clearForm() {
  	this.firstName = '';
	  this.middleName = '';
	  this.lastName = '';
	  this.phone = '';
	  this.email = '';
	  this.ftn = '';
	  this.instructorName = '';
		this.instructorPhone = '';
		this.instructorEmail = '';
		this.date = '';
		this.time = '';
		this.airport = '';
		this.aircraft = '';
		this.rating = '';
		this.retest = '';
		this.discontinuance = '';
		this.payment = '';
		this.meetingLocation = '';
		this.tailNumber = '';
		this.submission = '';
		this.examDetails = {};
  }

}
