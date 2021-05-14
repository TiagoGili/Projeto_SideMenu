import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Botões', url: '/botoes', icon: 'albums' },
    { title: 'Alerta', url: '/alerta', icon: 'warning' },
    { title: 'Badges', url: '/badges', icon: 'bookmark' },
    { title: 'Cartões', url: '/cartao', icon: 'card' },
    { title: 'Floating Action Button', url: '/f-abutton', icon: 'caret-forward-circle' },
    { title: 'Faixa', url: '/faixa', icon: 'options' },
    { title: 'Variáveis', url: '/variaveis/home', icon: 'bug'},
    { title: 'IMC', url: '/imc/home-imc', icon: 'restaurant'}
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
