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
    if(this.newTarea){
      let tarea = new Tarea();
      tarea.nombre = this.newTarea;
      tarea.Completada = true
      tarea.editando = false;
      tarea.nombreOriginal = this.newTarea;
      this.tareas.push(tarea);
      this.newTarea = '';
    }else{
      alert("Debes escribir una Tarea");
    }
  }

  borrar(id:number){
    this.tareas = this.tareas.filter((v,i)=> i !==id);
  }

  completada(id:number){
    this.tareas[id].Completada = !this.tareas[id].Completada;
  }

  editarTarea(tarea: Tarea) {
    tarea.editando = true;
  }
  
  guardarNombre(index: number) {
    let tarea = this.tareas[index];
    if (!tarea.nombre) {
      this.tareas.splice(index, 1);
    } else {
      tarea.editando = false;
      tarea.nombreOriginal = tarea.nombre;
    }
  }
  
  cancelarEdicion(tarea: Tarea) {
    tarea.editando = false;
    tarea.nombre = tarea.nombreOriginal;
  }

  ngOnInit() {
  }

}
