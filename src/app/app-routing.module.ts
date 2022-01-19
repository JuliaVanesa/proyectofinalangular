import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { HooksComponent } from './components/hooks/hooks.component';
import { InfoComponent } from './components/info/info.component';
import { LoginComponent } from './components/login/login.component';
import { MostViewAdminComponent } from './components/most-view-admin/most-view-admin.component';
import { MostViewComponent } from './components/most-view/most-view.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MyAccountComponent } from './components/my-account/my-account.component';
import { RegisterComponent } from './components/register/register.component';
import { AdminRoleGuard } from './guards/admin-role.guard';
import { ProtectedRouteGuard } from './guards/protected-route.guard';


const routes: Routes = [
  {
    path: 'login',
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
    canActivate: [ProtectedRouteGuard],

    component: MoviesComponent
  },
  {
    path: 'mi-cuenta',
    canActivate: [ProtectedRouteGuard],
    component: MyAccountComponent
  },

  {
    path: 'hooks',
    component: HooksComponent
  },
  {
    path: 'most view admin',
    canActivate: [ProtectedRouteGuard, AdminRoleGuard],
    component: MostViewAdminComponent
  },
  {
    path: 'most view ',
    canActivate: [ProtectedRouteGuard],
    component: MostViewComponent
  },
  {
    path: 'cart',
    canActivate: [ProtectedRouteGuard],
    component: CartComponent
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
