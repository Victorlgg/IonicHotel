import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  async signUp(){
    console.log("Formulario llenado");
  }

  redirectHome(){
    this.router.navigate(['/home']);
  }
}
