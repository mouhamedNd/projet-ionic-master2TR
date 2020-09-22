import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  
  {
    path: 'sign-up',
    loadChildren: () => import('./sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'accueil-client',
    loadChildren: () => import('./accueil-client/accueil-client.module').then( m => m.AccueilClientPageModule)
  },
  {
    path: 'accueil-admin',
    loadChildren: () => import('./accueil-admin/accueil-admin.module').then( m => m.AccueilAdminPageModule)
  },
  {
    path: 'liste-des-commandes',
    loadChildren: () => import('./liste-des-commandes/liste-des-commandes.module').then( m => m.ListeDesCommandesPageModule)
  },
  {
    path: 'profil-client',
    loadChildren: () => import('./profil-client/profil-client.module').then( m => m.ProfilClientPageModule)
  },
  {
    path: 'gestion-menu',
    loadChildren: () => import('./gestion-menu/gestion-menu.module').then( m => m.GestionMenuPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
