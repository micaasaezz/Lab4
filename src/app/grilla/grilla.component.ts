import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Persona } from '../persona';

import { ActivatedRoute, Router } from '@angular/router';


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


  constructor(private router:Router, private rs:ActivatedRoute) {
    console.log(router);
    console.log(rs);
    console.log(rs.params["value"]);
    console.log(rs.snapshot.data.title);
    console.log(rs.snapshot.params);
  }
  Ir(){
    this.router.navigate(["/grilla"]);
  }
  
  
  
  ngOnInit() {
  }

}
