import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
// import { HooksComponent } from './components/hooks/hooks.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { CartService } from './services/cart.service';
import { MostViewComponent } from './components/most-view/most-view.component';
import { MostViewAdminComponent } from './components/most-view-admin/most-view-admin.component';
import { InterceptorService } from './interceptors/interceptor.service';


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
    // HooksComponent,
    MostViewComponent,
    MostViewAdminComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule



  ],
  providers: [
    CartService,
    {provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
