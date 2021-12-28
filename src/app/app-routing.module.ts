import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HooksComponent } from './components/hooks/hooks.component';
import { InfoComponent } from './components/info/info.component';
import { LoginComponent } from './components/login/login.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MyAccountComponent } from './components/my-account/my-account.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {
    path: 'home',
    component: LoginComponent
  },
  {
    path: 'registro',
    component: RegisterComponent
  },
  {
    path: 'peliculas/:id',
    component: InfoComponent
  },

  {
    path: 'peliculas',
    component: MoviesComponent
  },
  {
    path: 'mi-cuenta',
    component: MyAccountComponent
  },

  {
    path: 'hooks',
    component: HooksComponent
  },
  {
    path: '',
    redirectTo: 'peliculas',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
