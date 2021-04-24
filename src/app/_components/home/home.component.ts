import { Component } from '@angular/core';
import { first } from 'rxjs/operators';
import { User } from "../../_model/user";
//import { UserService } from "../../_services/user.service";
@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    loading = false;
    users: User[];

    constructor() { }

    ngOnInit() {
        debugger;
        this.loading = true;
        // this.userService.getAll().pipe(first()).subscribe(users => {
        //     this.loading = false;
        //     this.users = users;
        // });
    }
}