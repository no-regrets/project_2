import { Component, OnInit } from '@angular/core';
import { User } from '../_services/user/user';
import { UserService } from '../_services/user/user.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user = new User()
  submitted = false;

  users: User[];

  constructor(private userService: UserService,
    private location: Location) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    return this.userService.getUsers()
      .subscribe(
        users => {
          console.log(users);
          this.users = users
        }
      );
  }

  newUser(): void {
    this.submitted = false;
    this.user = new User()

  }

  addUser() {
    this.submitted = true;
    this.save();
  }

  goBack(): void {
    this.location.back();
  }

  private save(): void {
    console.log(this.user);
    this.userService.addUser(this.user)
      .subscribe();
  }

}
