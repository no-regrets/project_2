import { Component } from '@angular/core';
import { first } from 'rxjs/operators';
import { Location } from '@angular/common';

import { User } from './../model';
import { UserService/*, AuthenticationService*/ } from './../_services';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    user: User;
    submitted = false;

    constructor(private userService: UserService,
        private location: Location) { }

    // ngOnInit() {
    //     this.userService.getUsers().pipe(first()).subscribe(users => {
    //         this.users = users;
    //     });

    // newUser(): void {
    //     this.submitted = false;
    //     this.user = new User();
    //   }
    
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



// import { Location } from '@angular/common';

// export class AddUserComponent{

//   user = new User();
//   submitted = false;

//   constructor(
//     private userService: UserService,
//     private location: Location
//   ) { }

//   newUser(): void {
//     this.submitted = false;
//     this.user = new User();
//   }

//  addUser() {
//    this.submitted = true;
//    this.save();
//  }

//   goBack(): void {
//     this.location.back();
//   }

//   private save(): void {
//     console.log(this.user);
//     this.userService.addUser(this.user)
//         .subscribe();
//   }
// }
