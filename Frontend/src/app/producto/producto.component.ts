import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  producto:Map<string, any> = new Map<string, any>();

constructor(private app:AppComponent) { }

ngOnInit(): void {
  //Leer información
  const info:Array<any> = JSON.parse(localStorage.getItem("producto") || "[]");

  //Convertir a mapa
  for (let arg of info) {
    this.producto.set(arg[0], arg[1]);
  }
  } 
}
