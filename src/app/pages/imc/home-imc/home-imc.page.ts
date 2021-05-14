import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-home-imc',
  templateUrl: './home-imc.page.html',
  styleUrls: ['./home-imc.page.scss'],
})
export class HomeImcPage implements OnInit {

  constructor(private router: Router) { }
    altura: Number;
    peso: Number;
    sexo: String;

  getValores(){
    console.log(this.altura);
    console.log(this.peso);
    console.log(this.sexo);
  }

  enviar(){
    var navigationExtras: NavigationExtras = {
      state: {
        altura: this.altura,
        peso: this.peso,
        sexo: this.sexo
      }
    }
    this.router.navigate(['imc/detalhes-imc'], navigationExtras);
  }

  ngOnInit() {
  }

}