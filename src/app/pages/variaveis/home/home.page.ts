import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private router: Router) { }
    nome: String;
    idade: Number;
    sexo: String;

  getValores(){
    console.log(this.nome);
    console.log(this.idade);
    console.log(this.sexo);
  }

  enviar(){
    var navigationExtras: NavigationExtras = {
      state: {
        nome: this.nome,
        idade: this.idade,
        sexo: this.sexo
      }
    }
    this.router.navigate(['variaveis/detalhes'], navigationExtras);
  }

  ngOnInit() {
  }

}
