import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from '../../app.component';
import { BindingComponent } from '../../binding/binding.component';
import { GrillaComponent } from '../../grilla/grilla.component';

import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from '../../error/error.component';

const rutas : Routes = [
  { path:'', component:AppComponent },
  { path:'grilla', component:GrillaComponent },
  { path:'binding', component:BindingComponent },
  { path:'persona/:id', component:GrillaComponent, data:{ title:'lab4' } },
  { path:'personas', component:GrillaComponent, children:[
    { path:'cargar', component:BindingComponent, data:{ title:'cargar' } },
    { path:'listar', component:GrillaComponent, 
      children:[ { path:':id', component:GrillaComponent }, { path:'mayores', component:GrillaComponent } ]
    }
  ]}, 
  { path:'**', component:ErrorComponent } //error ruta mal escrita 
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(rutas)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})

export class RuteoModule { }
