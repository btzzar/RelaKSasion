import { Injectable } from '@angular/core';

export interface User {
	id: number;
	email: string;
	password: string;
	date: Date;
  address?: string;
}


@Injectable({
  providedIn: 'root'
})
export class UserService {

  // currentUser: User = UserService.userList[0];
  currentUser: User = null;

  static userList: Array<User> = [
  	{ 	
  		id: 1,
  		email: 'test@test.com',
  		password: '123456',
  		date: new Date("2019-04-22 15:00")
  	},
  	{ 	
  		id: 2,
  		email: 'test1@test.com',
  		password: '111345',
  		date: new Date("2019-04-23 13:00")
  	}];

  	getUserName(user: User) : string {
  		return user.email;
  	};

  	getUserById(id : number): User {
  		var foundUser: User;
  		UserService.userList.forEach(user =>
  			{if(user.id = id){
  				foundUser = user;
  			}
  		});
      this.currentUser = foundUser;
  		return foundUser;
  	};

  	getUser(userEmail: string): User {
      this.currentUser = UserService.userList.find(userToFind => userToFind.email == userEmail);

  		return this.currentUser;
  	}

  	isPasswordCorrect(userEmail: string, password: string): boolean {
  		return UserService.userList.find(userToFind => (userToFind.email==userEmail && userToFind.password==password)) != undefined;
  	}

  	registerUser (email: string, password: string, date: Date): User {
  		var maxId = 0;
  		UserService.userList.forEach( user =>
  		{
  			if (maxId < user.id){
  				maxId = user.id;
  			}
  		});

  		var id = ++maxId;
  		var user: User = {id, email, password, date};

  		UserService.userList.push(user);

      // this.currentUser = user;
  		console.log(user);
  		return user;
  	}



  constructor() { }
}
