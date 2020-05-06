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

  // Set chosen user to edit, redirects to the form
  // Uses UsersService, UserFormComponent
  editUser(currUser) {
    this.usersService.currUser = currUser
    this.router.navigate(['edituser'])
  }

  // Delete chosen user
  // Uses UsersService
  deleteUser(currUser) {
    this.usersService.deleteUser(currUser)
  }

  // Iteractive search, can select the search by name or by CPF
  searchUsers(event) {
    console.log(this.selected)
    if (this.selected == "cpf") {
      this.users = this.usersService.users.filter(user => user.cpf.toString().includes(event.target.value))
    }
    else {
      this.users = this.usersService.users.filter(user => user.name.toLowerCase().includes(event.target.value.toLowerCase()))
    }

  }

  // Delete the current user
  // Opens a dialog window to confirm action
  // Uses ConfirmationDialogComponent
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