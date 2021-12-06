import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './productos/productos.component';
import { ComprasComponent } from './compras/compras.component';
import { ProductoComponent } from './producto/producto.component';


const routes: Routes = [
  {path: '', component: ProductosComponent},
  {path: 'compras', component: ComprasComponent},
  {path: "compras/productos", component: ProductosComponent},
  {path: 'compras/producto', component: ProductoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }