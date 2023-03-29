import { Component, OnInit } from '@angular/core';
import { Tarea } from '../tarea';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {
  
  tareas: Tarea[] = [];
  newTarea : string;
  editando: boolean = false;

  constructor() {}

  anadirTarea(){
    if(this.newTarea){//Verifico si contiene algun valor
      let tarea = new Tarea();//Se crea una nueva tarea
      tarea.nombre = this.newTarea;//Se establece el nombre con la variable newTarea
      tarea.Completada = true 
      tarea.editando = false;//Se establece en false para decir que no se esta editando en ese momento
      tarea.nombreOriginal = this.newTarea;//A nombreOriginal se le dara el valor siempre de newTarea
      this.tareas.push(tarea);//Se añade la tarea al array de tareas
      this.newTarea = '';
    }else{
      alert("Debes escribir una Tarea");//Si la variable tarea no tiene valor nos muestra el alert
    }
  }

  borrar(id:number){//Recibe como parametro un numero que hace referencia a la id de la tarea
    this.tareas = this.tareas.filter((v,i)=> i !==id);//Se reemplaza el arrray por otro igual excluyendo al valor que es igual al id del parametro
  }

  completada(id:number){//Recibe como parametro un numero que hace referencia a la id de la tarea
    this.tareas[id].Completada = !this.tareas[id].Completada;//Actualiza el estado de completada al estado opuesto
  }

  editarTarea(tarea: Tarea) {//Recibe una tarea como parametro
    tarea.editando = true;//Cambio el estado de editando a true
  }
  
  guardarNombre(index: number) {//Recibe el indice de la tarea de la que se guardara el nuevo valor
    let tarea = this.tareas[index];//Creo una variable tarea para alamcenar en el array tareas
    if (!tarea.nombre) {
      this.tareas.splice(index, 1);
    } else {  //Si se añade un valor diferente se termina de editar y se le asigna un valor distinto al nombre
      tarea.editando = false;
      tarea.nombreOriginal = tarea.nombre;
    }
  }
  
  cancelarEdicion(tarea: Tarea) { //recibo como parametro una tarea
    tarea.editando = false; //cambio el estado de editando a false
    tarea.nombre = tarea.nombreOriginal; //Le asigno al nombre el valor origianl de esta
  }

  ngOnInit() {
  }

}
