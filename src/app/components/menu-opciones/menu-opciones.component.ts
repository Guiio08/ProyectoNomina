import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-opciones',
  templateUrl: './menu-opciones.component.html',
  styleUrls: ['./menu-opciones.component.css']
})
export class MenuOpcionesComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  agregarEmpleado(){
    this.router.navigate(['/agregarEmpleado'])
  }

  generarContrato(){
    this.router.navigate(['/generarContrato'])
  }

}
