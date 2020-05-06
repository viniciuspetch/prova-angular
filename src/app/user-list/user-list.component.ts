import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef } from "@angular/material";
import { ConfirmationDialogComponent } from "../confirmation-dialog/confirmation-dialog.component";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users = []
  title = "Lista de usuários"
  selected = 'name'

  constructor(private dialog: MatDialog, private router: Router, public usersService: UsersService) {
    this.users = usersService.users
  }

  ngOnInit() { }

  editUser(currUser) {
    this.usersService.currUser = currUser
    this.router.navigate(['edituser'])
  }

  deleteUser(currUser) {
    this.usersService.deleteUser(currUser)
  }

  searchUsers(event) {
    console.log(this.selected)
    if (this.selected == "cpf") {
      this.users = this.usersService.users.filter(user => user.cpf.toString().includes(event.target.value))
    }
    else {
      this.users = this.usersService.users.filter(user => user.name.toLowerCase().includes(event.target.value.toLowerCase()))
    }

  }

  openConfirmDialog(currUser) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      message: "Você deseja mesmo remover este usuário?",
      btn1: "Sim, remover usuário",
      btn2: "Cancelar",
    }
    var dialogRef = this.dialog.open(ConfirmationDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      data => {
        if (data) {
          this.deleteUser(currUser)
        }
      }
    )
  }
}