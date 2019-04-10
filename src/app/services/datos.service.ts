import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { datos } from '../models/datos.interface';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  private todosCollection: AngularFirestoreCollection<datos>;
  private todos: Observable<datos[]>;

  constructor(db: AngularFirestore) { 
    this.todosCollection = db.collection<datos>('todos')  ;
    this.todos = this.todosCollection.snapshotChanges().pipe(map(
      actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id  = a.payload.doc.id;
          return { id, ...data};
        });
      }
    ));
  }

  getDatos(){
    return this.todos;
  }

  getDato(id:string){
    return this.todosCollection.doc<datos>(id).valueChanges();
  }

  addDatos(datos: datos){
    return this.todosCollection.add(datos);
  }

  removeDatos(id: string){
    return this.todosCollection.doc(id).delete();
  }
}
