import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'alerta',
    loadChildren: () => import('./pages/alerta/alerta.module').then( m => m.AlertaPageModule)
  },
  {
    path: 'badges',
    loadChildren: () => import('./pages/badges/badges.module').then( m => m.BadgesPageModule)
  },
  {
    path: 'botoes',
    loadChildren: () => import('./pages/botoes/botoes.module').then( m => m.BotoesPageModule)
  },
  {
    path: 'cartao',
    loadChildren: () => import('./pages/cartao/cartao.module').then( m => m.CartaoPageModule)
  },
  {
    path: 'f-abutton',
    loadChildren: () => import('./pages/f-abutton/f-abutton.module').then( m => m.FAbuttonPageModule)
  },
  {
    path: 'faixa',
    loadChildren: () => import('./pages/faixa/faixa.module').then( m => m.FaixaPageModule)
  },
  {
    path: 'variaveis/home',
    loadChildren: () => import('./pages/variaveis/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'variaveis/detalhes',
    loadChildren: () => import('./pages/variaveis/detalhes/detalhes.module').then( m => m.DetalhesPageModule)
  },
  {
    path: 'imc/detalhes-imc',
    loadChildren: () => import('./pages/imc/detalhes-imc/detalhes-imc.module').then( m => m.DetalhesImcPageModule)
  },
  {
    path: 'imc/home-imc',
    loadChildren: () => import('./pages/imc/home-imc/home-imc.module').then( m => m.HomeImcPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
