import { Component, OnInit } from '@angular/core';
import { CepService } from '../cep.service';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef } from "@angular/material";
import { ConfirmationDialogComponent } from "../confirmation-dialog/confirmation-dialog.component";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  user
  constructor(private dialog: MatDialog, private router: Router, public cep: CepService, public usersService: UsersService) { }

  ngOnInit() {
    this.user = { ...this.usersService.currUser }
  }

  formSubmit() {
    this.usersService.saveUser(this.user);
    this.router.navigate(['userlist'])
  }

  changeCep(event) {
    console.log("changeCep")
    var cep = event.target.value
    if (cep.length == 8) {
      this.cep.getCep(cep).then((apiResponse: any) => {
        if (apiResponse.erro) {
          alert('Cep não encontrado')
        } else {
          this.user = {
            ...this.user,
            cep: apiResponse.cep.replace('-', ''),
            state: apiResponse.uf,
            city: apiResponse.localidade,
            street: apiResponse.logradouro
          }
        }
      }).catch(error => {
        alert('Erro ao buscar o cep')
        console.error(error)
      })
    }
  }

  openConfirmDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.data = {
      message: "Você deseja descartar as alterações?",
      btn1: "Descartar e voltar à lista de usuários",
      btn2: 'Cancelar'
    }
    var dialogRef = this.dialog.open(ConfirmationDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      data => {
        if (data) {
          this.router.navigate(['userlist'])
        }
      }
    )
  }
}