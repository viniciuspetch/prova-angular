import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users = []

  constructor(private router: Router, public usersService: UsersService) {
    this.users = usersService.users
  }

  ngOnInit() {
  }

  editUser() {
    console.log("edit")
    this.router.navigate(['edituser'])
  }

  deleteUser() {
    console.log("delete")
  }
}