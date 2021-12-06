import { Component, OnInit } from '@angular/core';
import { faSearch, faDollyFlatbed, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  itle = 'Amazon';
  usuario = "Juan";
  ubicacion = "Bucaramanga";
  zip = "680003";
  opcionesFiltrado:Array<string> = [
    "Todos",
    "Computadores",
    "Celulares"
  ];
  numArt:number = 0;

  //Íconos
  faSearch = faSearch;
  faCash = faDollyFlatbed;
  fabasket = faShoppingBasket

  constructor() {
   }

  ngOnInit(): void {
    
  }

}
