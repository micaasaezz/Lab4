import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { FormsModule } from '@angular/forms';
import { GrillaComponent } from './grilla/grilla.component';
import { ErrorComponent } from './error/error.component';

import { RuteoModule } from './modulos/ruteo/ruteo.module';

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    GrillaComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RuteoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
