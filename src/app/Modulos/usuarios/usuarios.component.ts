import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  //Variables globales
  verf = false;
  usuario: any;
  iduser:any;
  user = {
    Tipo_Usuario: "",
    Nombre: "",
    Email: "",
    Clave: "",
    Celular: "",
    Direccion: "",
  };
  // variables para validar
validtipo = true;
validnombre = true;
validcorreo = true;
validclave = true;
validcelular = true;
validdireccion = true;
beditar = false;

constructor(private suser: UsuarioService ){ }

ngOnInit(): void {
  this.consulta();
  this.limpiar();
}

//mostrar formulario

mostrar(dato:any) {
  switch(dato){
    case 0:
      this.verf = false;
      this.beditar = false;
      this.iduser = "";
      this.limpiar();
      break;
      case 1:
        this.verf = true;
        break;
  }
}

//Limpiar

limpiar(){
this.user.Nombre = "";
this.user.Email = "";
this.user.Clave = "";
this.user.Celular = "";
this.user.Direccion = "";
}

//Validar

validar(){
  if (this.user.Tipo_Usuario ==""){
    this.validtipo = false;
  } else {
    this.validtipo = true;
  }
  if (this.user.Nombre ==""){
    this.validnombre = false;
  } else {
    this.validnombre = true;
  }
  if (this.user.Email ==""){
    this.validcorreo = false;
  } else {
    this.validcorreo = true;
  }
  if (this.user.Clave ==""){
    this.validclave = false;
  } else {
    this.validclave = true;
  }
  if (this.user.Celular ==""){
    this.validcelular = false;
  } else {
    this.validcelular = true;
  }
  if (this.user.Direccion ==""){
    this.validdireccion = false;
  } else {
    this.validdireccion = true;
  }

}

consulta(){
  this.suser.consultar().subscribe((result:any) => {
    this.usuario = result;
    //console.log(this.usuario);
  } )
}

ingresar() {
  this.validar();

  if (this.validtipo==true && this.validnombre==true && this.validcorreo==true && this.validclave==true && this.validcelular==true && this.validdireccion==true ) {
    this.suser.insertar(this.user).subscribe((datos:any) =>{

      if (datos['resultado']=='OK') {
        //alert(datos['mensaje']);
        this.consulta();
      }
    } );
    this.mostrar(0);
    this.limpiar();
  
  }

}

pregunta(id: any, nombre: any){
  Swal.fire({
    title: '¿Seguro que quiere borrar el usuario '+ nombre +'?',
    text: "¡Esta acción no se puede revertir!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, eliminar'
  }).then((result) => {
    if (result.isConfirmed) {
      this.borrarusuario(id);
      Swal.fire(
        '¡Eliminado!',
        'El usuario fue eliminado.',
        'success'
      )
    }
  })
}

borrarusuario (id:any) {
  this.suser.eliminar(id).subscribe((datos:any) => {
    if (datos['resultado']=='OK'){
      this.consulta();
    }
  });
}

cargardatos(datos:any, id:number){
  //console.log(datos);
  this.user.Nombre = datos.Nombre;
  this.user.Tipo_Usuario = datos.Tipo_Usuario;
  this.user.Clave = datos.Clave;
  this.user.Email = datos.Email;
  this.user.Celular = datos.Celular;
  this.user.Direccion = datos.Direccion;
  this.iduser = id;
  this.mostrar(1);
  this.beditar=true;
}

editar (){
  this.validar();

  if (this.validtipo==true && this.validnombre==true && this.validcorreo==true && this.validclave==true && this.validcelular==true && this.validdireccion==true ) {
    this.suser.edit(this.user, this.iduser).subscribe((datos:any) =>{

      if (datos['resultado']=='OK') {
        //alert(datos['mensaje']);
        this.consulta();
      }
    } );
    this.mostrar(0);
  }

}

}
