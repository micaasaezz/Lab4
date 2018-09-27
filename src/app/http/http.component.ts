import { Component, OnInit } from '@angular/core';
import { DataService } from '../servicios/data.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  constructor(private miServicio:DataService) { }

  ngOnInit() {
    this.miServicio.sinToken().subscribe(
      data=>{ console.log(data); }, 
      error=>{ console.log(error); }
     );

    this.miServicio.Token().subscribe(
      data=>{ console.log(data); }, 
      error=>{ console.log(error); }
    );

    this.miServicio.Listado().subscribe(
      data=>{ console.log(data); }, 
      error=>{ console.log(error); }
    );
  }
  
  


}
