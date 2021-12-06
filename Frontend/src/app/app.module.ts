import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { ProductosComponent } from './productos/productos.component';
import { ComprasComponent } from './compras/compras.component';
import { ProductoComponent } from './producto/producto.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    ComprasComponent,
    ProductoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }