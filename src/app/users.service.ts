import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  currUser
  users = [
    {
      name: 'Maria Flores',
      cpf: '83321492075',
      phone: '1533283928',
      email: 'maria_f@gmail.com',
      cep: '69906043',
      state: 'AC',
      city: 'Rio Branco',
      street: 'Rua Arnaldo Aleixo (Conjunto Canaã)',
    },
    {
      name: 'João Carlos',
      cpf: '31213393035',
      phone: '1532841040',
      email: 'joao.c@gmail.com',
      cep: '79096766',
      state: 'MS',
      city: 'Campo Grande',
      street: 'Rua Rodolfho José Rospide da Motta',
    },
    {
      name: 'Stephanie Dias',
      cpf: '02085196020',
      phone: '1533294040',
      email: 'ste.dias@gmail.com',
      cep: '23825080',
      state: 'RJ',
      city: 'Itaguaí',
      street: 'Rua Mario Bastos Filho',
    },
    {
      name: 'Mirtes Souza',
      cpf: '33764389001',
      phone: '1530178756',
      email: 'irma.mirtes@gmail.com',
      cep: '40420150',
      state: 'BA',
      city: 'Salvador',
      street: '1ª Travessa Clóvis de Almeida Maia',
    }
  ]

  resetCurrUser() {
    this.currUser = { name: "", cpf: "", phone: "", email: "", cep: "", state: "", city: "", street: "" }
  }

  saveEditedUser(newUser) {
    console.log(this.users)
    var index = this.users.findIndex(user => Number(user.cpf) == Number(newUser.cpf))
    console.log(index)
    console.log(newUser.cpf)
    if (index == -1) {
      this.users.push(newUser)
    }
    else {
      this.users[index] = newUser
    }
  }

  constructor() {
    this.resetCurrUser()
  }
}