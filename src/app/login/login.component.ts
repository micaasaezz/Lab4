import { Component, OnInit } from '@angular/core';

import { DataService } from '../servicios/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario;
  clave;
  constructor(private miServicio:DataService) { }

  ngOnInit() {
  }

  LogIn()
  {
    this.miServicio.LogInToken(this.usuario, this.clave).subscribe(
      data=>{ console.log(data);
        localStorage.setItem("token", data['token']);
      }, 
      error=>{ console.log(error); }
    );
  }
  

}
