import { Component, OnInit } from '@angular/core';
import { CepService } from '../cep.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  user = {}
  constructor(public cep: CepService) { }

  ngOnInit() {
  }

  formSubmit() {
    console.log("submit")
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
}