import { Component, OnInit } from '@angular/core';
//import { NgForm } from "@angular/forms";

@Component({
  selector: 'movcrav-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  user = {
    email: '',
    password: ''
  };

  onSubmit(form) {
    console.log(form);
  }
  
  constructor() { }

  ngOnInit() {
  }
}
