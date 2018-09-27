import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { FormsModule } from '@angular/forms';
import { GrillaComponent } from './grilla/grilla.component';
import { ErrorComponent } from './error/error.component';

import { RuteoModule } from './modulos/ruteo/ruteo.module';
import { DataService } from './servicios/data.service';

import { HttpClientModule } from '@angular/common/http';
import { HttpComponent } from './http/http.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    GrillaComponent,
    ErrorComponent,
    HttpComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RuteoModule,
    HttpClientModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
