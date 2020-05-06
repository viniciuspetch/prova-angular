import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { ConfirmationDialogComponent } from "../confirmation-dialog/confirmation-dialog.component";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  title = "Página principal"

  constructor(private dialog: MatDialog, public router: Router, public usersService: UsersService) { }

  ngOnInit() { }

  newUser() {
    this.usersService.resetCurrUser();
    this.router.navigate(['newuser'])
  }

  resetButton() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.data = {
      message: "Você deseja resetar a lista de usuários para a configuração padrão?",
      btn1: "Resetar lista de usuários",
      btn2: 'Cancelar'
    }
    var dialogRef = this.dialog.open(ConfirmationDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      data => {
        if (data) {
          this.usersService.resetLocalStorage();
        }
      }
    )    
  }

  deleteButton() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.data = {
      message: "Você deseja remover todos os usuários cadastrados?",
      btn1: "Remover todos os usuários",
      btn2: 'Cancelar'
    }
    var dialogRef = this.dialog.open(ConfirmationDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      data => {
        if (data) {
          this.usersService.deleteLocalStorage();
        }
      }
    )
  }
}
