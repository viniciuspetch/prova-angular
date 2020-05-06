import { TestBed } from '@angular/core/testing';

import { UsersService } from './users.service';

describe('UsersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should create a new user', () => {
    const service: UsersService = TestBed.get(UsersService);
    localStorage.removeItem("crud_users")
    service.loadLocalStorage()
    var initLen = service.users.length
    var user = {
      name: 'Mirtes Souza',
      cpf: '33764389888',
      phone: '1530178756',
      email: 'irma.mirtes@gmail.com',
      cep: '40420150',
      state: 'BA',
      city: 'Salvador',
      street: '1ª Travessa Clóvis de Almeida Maia',
    }
    service.saveUser(user)
    var newUsers = JSON.parse(localStorage.getItem("crud_users"))
    expect(newUsers.length).toEqual(initLen + 1)
  });

  it('should update an existing user', () => {
    const service: UsersService = TestBed.get(UsersService);
    localStorage.removeItem("crud_users")
    service.loadLocalStorage()
    var initLen = service.users.length
    var user = {
      name: 'Mirtes Souza',
      cpf: '33764389001',
      phone: '1530178756',
      email: 'irma.mirtes@gmail.com',
      cep: '40420150',
      state: 'BA',
      city: 'Salvador',
      street: '1ª Travessa Clóvis de Almeida Maia',
    }
    service.saveUser(user)
    var newUsers = JSON.parse(localStorage.getItem("crud_users"))
    expect(newUsers.length).toEqual(initLen)
  });

  it('should delete an existing user', () => {
    const service: UsersService = TestBed.get(UsersService);
    localStorage.removeItem("crud_users")
    service.loadLocalStorage()
    var initLen = service.users.length
    var user = {
      name: 'Mirtes Souza',
      cpf: '33764389001',
      phone: '1530178756',
      email: 'irma.mirtes@gmail.com',
      cep: '40420150',
      state: 'BA',
      city: 'Salvador',
      street: '1ª Travessa Clóvis de Almeida Maia',
    }
    service.deleteUser(user)
    var newUsers = JSON.parse(localStorage.getItem("crud_users"))
    expect(newUsers.length).toEqual(initLen - 1)
  });

  it('should return the index of the first default user', () => {
    const service: UsersService = TestBed.get(UsersService);
    localStorage.removeItem("crud_users")
    service.loadLocalStorage()
    var initLen = service.users.length
    var user = {
      name: 'Maria Flores',
      cpf: '83321492075',
      phone: '1533283928',
      email: 'maria_f@gmail.com',
      cep: '69906043',
      state: 'AC',
      city: 'Rio Branco',
      street: 'Rua Arnaldo Aleixo (Conjunto Canaã)',
    }
    var index = service.searchUser(user)
    expect(index).toEqual(0)
  });

  it('should return the index of the last default user', () => {
    const service: UsersService = TestBed.get(UsersService);
    localStorage.removeItem("crud_users")
    service.loadLocalStorage()
    var initLen = service.users.length
    var user = {
      name: 'Mirtes Souza',
      cpf: '33764389001',
      phone: '1530178756',
      email: 'irma.mirtes@gmail.com',
      cep: '40420150',
      state: 'BA',
      city: 'Salvador',
      street: '1ª Travessa Clóvis de Almeida Maia',
    }
    var index = service.searchUser(user)
    expect(index).toEqual(3)
  });

  it('should find no user', () => {
    const service: UsersService = TestBed.get(UsersService);
    localStorage.removeItem("crud_users")
    service.loadLocalStorage()
    var initLen = service.users.length
    var user = {
      name: 'Maria Flores',
      cpf: '83321492074',
      phone: '1533283928',
      email: 'maria_f@gmail.com',
      cep: '69906043',
      state: 'AC',
      city: 'Rio Branco',
      street: 'Rua Arnaldo Aleixo (Conjunto Canaã)',
    }
    var index = service.searchUser(user)
    expect(index).toEqual(-1)
  });

  it('should reset correcty', () => {
    const service: UsersService = TestBed.get(UsersService);
    var emtpyUser = { name: "", cpf: "", phone: "", email: "", cep: "", state: "", city: "", street: "" }
    service.currUser = {
      name: 'Maria Flores',
      cpf: '83321492074',
      phone: '1533283928',
      email: 'maria_f@gmail.com',
      cep: '69906043',
      state: 'AC',
      city: 'Rio Branco',
      street: 'Rua Arnaldo Aleixo (Conjunto Canaã)',
    }
    service.resetCurrUser()
    expect(JSON.stringify(service.currUser) == JSON.stringify(emtpyUser)).toBeTruthy()
  });
});
