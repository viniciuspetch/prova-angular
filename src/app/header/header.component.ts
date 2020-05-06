import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(public router: Router, public usersService: UsersService) { }
  ngOnInit() { }

  // Sets the form to create a new user, redirects
  // Uses UsersService
  newUser() {
    console.log('newUser()')
    this.usersService.resetCurrUser();
    this.router.navigate(['newuser'])
  }
}