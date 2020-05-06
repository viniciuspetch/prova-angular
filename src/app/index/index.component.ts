import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  title = "Página principal"

  constructor(public router: Router, public usersService: UsersService) { }

  ngOnInit() { }

  newUser() {
    console.log('newUser()')
    this.usersService.resetCurrUser();
    this.router.navigate(['newuser'])
  }
}
