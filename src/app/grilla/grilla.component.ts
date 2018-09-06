import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-grilla',
  templateUrl: './grilla.component.html',
  styleUrls: ['./grilla.component.css']
})
export class GrillaComponent implements OnInit {
  @Input() lista:Array<Persona>;
  
  @Input() set persona(persona:Persona){
    this.array.push(persona);
    this.cantidad.emit(this.lista.length);
  }
  array = [];

  @Output() cantidad = new EventEmitter<number>();


  constructor() { }

  ngOnInit() {
  }

}
