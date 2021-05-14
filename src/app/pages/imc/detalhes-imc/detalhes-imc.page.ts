import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-detalhes-imc',
  templateUrl: './detalhes-imc.page.html',
  styleUrls: ['./detalhes-imc.page.scss'],
})
export class DetalhesImcPage implements OnInit {

  altura: Number;
  peso: Number;
  sexo: String;
  s: String;
  class: String;
  grau: Number;
  resul: Number;

  constructor(private route: ActivatedRoute, private router: Router) { 
    this.route.queryParams.subscribe(params => {
      let state = this.router.getCurrentNavigation().extras.state;
      if (state) {

        this.resul = (state.peso / (state.altura * state.altura));  
        this.s = state.sexo;

        if(this.s == "f"){
          if (this.resul < 19){
            this.class = "Abaixo do Peso";
            this.grau = 0;
          } else if (this.resul >= 19 && this.resul <= 23.9){
            this.class = "Normal";
            this.grau = 0;
          } else if (this.resul >= 24 && this.resul <= 28.9){
            this.class = "Obesidade Leve";
            this.grau = 1;
          } else if (this.resul >= 29 && this.resul <= 38.9){
            this.class = "Obesidade Moderada";
            this.grau = 2;
          } else if (this.resul > 39){
            this.class = "Obesidade Mórbida";
            this.grau = 3;
          }
        }

        if(this.s == "m"){
          if (this.resul < 20){
            this.class = "Abaixo do Peso";
            this.grau = 0;
          } else if (this.resul >= 20 && this.resul <= 24.9){
            this.class = "Normal";
            this.grau = 0;
          } else if (this.resul >= 25 && this.resul <= 29.9){
            this.class = "Obesidade Leve";
            this.grau = 1;
          } else if (this.resul >= 30 && this.resul <= 39.9){
            this.class = "Obesidade Moderada";
            this.grau = 2;
          } else if (this.resul > 40){
            this.class = "Obesidade Mórbida";
            this.grau = 3;
          }
        }
      }
    });
  }

  ngOnInit() {
  }

}
