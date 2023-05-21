import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/servicios/productos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit{

    //Variables globales
    verf = false;
    producto: any;
    idprod:any;
    product = {
      codigo_producto: "",
      nombre_producto: "",
      ncategoria: "",
      valor_producto: 0,
      stock_producto: 0,
    };
    // variables para validar
  validcodigo = true;
  validnombre = true;
  validvalor = true;
  beditar = false;
  
  constructor(private sproducto: ProductosService ){ }
  
  ngOnInit(): void {
    this.consulta();
    //this.limpiar();
  }
  
  //mostrar formulario
  
  mostrar(dato:any) {
    switch(dato){
      case 0:
        this.verf = false;
        this.beditar = false;
        this.idprod = "";
        //this.limpiar();
        break;
        case 1:
          this.verf = true;
          break;
    }
  }
  
  consulta(){
    this.sproducto.consultar().subscribe((result:any) => {
      this.producto = result;
      //console.log(this.usuario);
    } )
  }
  

}
