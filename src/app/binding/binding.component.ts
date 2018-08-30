import { Component, OnInit, OnChanges, AfterViewInit, OnDestroy, SimpleChanges } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  ngOnChanges(changes: SimpleChanges): void {
    console.log("On changes!");
  }
  ngOnDestroy(): void {
    console.log("On destroy!");
  }
  ngAfterViewInit(): void {
    console.log("After view init!");
  }

  msj = "Ingrese datos: ";
  msjBoton = "Enviar";
  nombre = "Mica";
  lista = [
    "Mica",
    "Marcas",
    "Eze"
  ]
  Enviar(e)
  {
    console.log(e);
  }

  constructor() { }

  ngOnInit() {
    console.log();
  }


  
  nombrep = "";
  apellido = "";
  sueldo = 0;
  personasArray = [];

  EnviarPersona()
  {
    let persona = new Persona(this.nombrep, this.apellido, this.sueldo);
    //this.personasArray.push(persona.ToString());
    this.personasArray.push(persona);
  }
}
