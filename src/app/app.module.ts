import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MoviesComponent } from './components/movies/movies.component';
import { InfoComponent } from './components/info/info.component';
import { CartComponent } from './components/cart/cart.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './components/menu/menu.component';
import { MyAccountComponent } from './components/my-account/my-account.component';
import { PersonaListComponent } from './components/persona-list/persona-list.component';
import { PersonaItemComponent } from './components/persona-item/persona-item.component';
import { HooksComponent } from './components/hooks/hooks.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MoviesComponent,
    InfoComponent,
    CartComponent,
    MenuComponent,
    MyAccountComponent,
    PersonaListComponent,
    PersonaItemComponent,
    HooksComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
