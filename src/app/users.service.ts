import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  currUser
  users = []

  // Set the user list to default, save in localStorage
  resetLocalStorage() {
    this.users = [
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
    this.saveLocalStorage()
  }

  // Set user list as empty, save in localStorage
  deleteLocalStorage() {
    this.users = []
    this.saveLocalStorage()
  }

  // Save current user list in localStorage
  saveLocalStorage() {
    localStorage.setItem("crud_users", JSON.stringify(this.users))
  }

  // Load user list from localStorage, set and save default user list if there's no data
  loadLocalStorage() {
    var stg = localStorage.getItem('crud_users')
    // Local content exists, use it
    if (stg) {
      this.users = JSON.parse(stg)
    }
    // no local data found, use default
    else {
      this.resetLocalStorage();
    }
  }

  // Reset current user, used to pass data to form
  resetCurrUser() {
    this.currUser = { name: "", cpf: "", phone: "", email: "", cep: "", state: "", city: "", street: "" }
  }

  // Search for an user on the user list, return its index
  searchUser(user) {
    return this.users.findIndex(listUser => Number(listUser.cpf) == Number(user.cpf))
  }

  // Save user data if already exists, create new user otherwise
  saveUser(newUser) {
    var index = this.searchUser(newUser)
    if (index == -1) {
      this.users.push(newUser)
    }
    else {
      this.users[index] = newUser
    }
    this.saveLocalStorage()
  }

  // Delete user
  deleteUser(user) {
    var index = this.searchUser(user)
    if (index != -1) {
      this.users.splice(index, 1)
    }
    this.saveLocalStorage()
  }

  constructor() {
    this.loadLocalStorage()
    this.resetCurrUser()
  }
}