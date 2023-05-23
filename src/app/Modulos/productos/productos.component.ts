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
    categoria: any;
    idprod:any;
    product = {
      codigo_producto: "",
      nombre_producto: "",
      fo_categoria: 0,
      valor_producto: 0,
      stock_producto: 0,
    };

    // variables para validar
  validcodigo = true;
  validnombre = true;
  validvalor = true;
  validstock = true;
  validcate = true;
  beditar = false;
  
  constructor(private sproducto: ProductosService ){ }
  
  ngOnInit(): void {
    this.consulta();
    this.consulta_cate();
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
  
  //Limpiar

limpiar(){
  this.product.codigo_producto = "";
  this.product.nombre_producto = "";
  this.product.fo_categoria = 0;
  this.product.valor_producto = 0;
  this.product.stock_producto = 0;
  }
  
  //Validar

  validar(){
    if (this.product.codigo_producto ==""){
      this.validcodigo = false;
    } else {
      this.validcodigo = true;
    }
    if (this.product.nombre_producto ==""){
      this.validnombre = false;
    } else {
      this.validnombre = true;
    }
    if (this.product.fo_categoria ==0){
      this.validcate = false;
    } else {
      this.validcate = true;
    }
    if (this.product.valor_producto ==0){
      this.validvalor = false;
    } else {
      this.validvalor = true;
    }
    if (this.product.stock_producto ==0){
      this.validstock = false;
    } else {
      this.validstock = true;
    }
  }

  consulta(){
    this.sproducto.consultar().subscribe((result:any) => {
      this.producto = result;
      //console.log(this.usuario);
    } )
  }
  
  consulta_cate(){
    this.sproducto.consultar_cate().subscribe((result:any) => {
      this.categoria = result;
      //console.log(this.usuario);
    } )
  }

  ingresar() {
    this.validar();
  let ca=Number(this.product.fo_categoria);
  this.product.fo_categoria = ca;
    if (this.validcodigo==true && this.validnombre==true && this.validvalor==true && this.validstock==true && this.validcate==true) {
      this.sproducto.insertar(this.product).subscribe((datos:any) =>{
  
        if (datos['resultado']=='OK') {
          //alert(datos['mensaje']);
          this.consulta();
        }
      } );
      this.mostrar(0);
      this.limpiar();
    
    }
  
  }
}
