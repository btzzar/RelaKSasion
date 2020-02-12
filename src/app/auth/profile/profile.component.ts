import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';


import { UserService, User } from './../../shared/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  isEditing: boolean = false;
  profileForInput: User;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private userService: UserService) { }

  ngOnInit() {
    
  	this.profileForInput = {
  		id: this.data.user.id,
  		email: this.data.user.email,
  		date: this.data.date,
  		password: this.data.user.password,
  		address: this.data.user.address
  	};
  }

  finishEditing(form: NgForm){
  	this.data.user.email = this.profileForInput.email;
  	this.data.user.password = this.profileForInput.password;
  	this.data.user.address = this.profileForInput.address;

  	console.log(this.data.user);
  	console.log(UserService.userList);
  	this.isEditing = false;
  }

}
