import { Component } from '@angular/core';
import { UserService } from './shared/user.service';
import {  MatDialog } from '@angular/material';
import { NgModule } from '@angular/core';


import { ProfileComponent } from './auth/profile/profile.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'relaksasion-app';

  profileOpened: boolean = false;

  constructor(private userService: UserService, private dialog: MatDialog){  }

  openProfile(userId: number)
  {
    if(this.userService.currentUser!=null){
  	this.profileOpened = true;

  	const profileDialog = this.dialog.open(ProfileComponent, {
  		disableClose: false,
  		width: "30vw",
  		data: { user: this.userService.getUserById(userId) }
  	});


  	profileDialog.afterClosed().subscribe(result => {
 	  this.profileOpened = false;

 	});
  }
  }

  onLogout(){
    this.userService.currentUser = null;
  }
}
