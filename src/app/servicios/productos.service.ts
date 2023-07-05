import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ProductosService {

  url='http://localhost/Proyecto-Sena/src/app/php/producto/'

  constructor(private http:HttpClient) { }

  consultar () {
    return this.http.get(`${this.url}consulta.php`);
  }
  insertar(datos:any){
    return this.http.post(`${this.url}insertar.php`, JSON.stringify(datos));
  }
  consultar_cate () {
    return this.http.get(`${this.url}consulta_cate.php`);
  }

  eliminar(id:number) {
    return this.http.get(`${this.url}eliminar.php?id=${id}`);
  }
  editar(datos:any) {
    return this.http.post(`${this.url}editar.php`, JSON.stringify(datos));
  }
}
