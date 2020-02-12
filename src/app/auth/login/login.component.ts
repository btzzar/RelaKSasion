import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UserService } from './../../shared/user.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  errorExists = false;
  errorText = "";

  constructor(private userService: UserService, private router: Router) { }


  onSubmit(form: NgForm)
  {
     var email = form.value.email;
     var password = form.value.password;
     var user = this.userService.getUser(email);
     if(!user){
       this.errorExists = true;
       this.errorText = "There is no registered user with email " + email;
       return;
     }
     var isPasswordValid = this.userService.isPasswordCorrect(email, password);
     if(isPasswordValid == false){
       this.errorExists = true;
       this.errorText = "Wrong password";
       this.userService.currentUser = null;
       return;
     }else{
     this.errorExists = false;
     this.router.navigate(['/explore']);
     this.userService.currentUser = user;
     }
  }

  ngOnInit() {
  }

}
