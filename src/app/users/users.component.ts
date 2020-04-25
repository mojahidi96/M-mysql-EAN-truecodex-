import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: any;

  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.getUsers()
  }
  getUsers() {
    this.userService.getUsers().subscribe(result => {
      this.users = result;
    }, err => console.log(err))
  }

}
