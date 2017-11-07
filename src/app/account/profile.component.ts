import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'movcrav-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userForm = {
    fname: '',
    lname:'',
    uname: '',
    email:''
  }
  constructor() { }

  OnSubmit(form)
  {
    console.log(form);
  }
  ngOnInit() {
  }

}
