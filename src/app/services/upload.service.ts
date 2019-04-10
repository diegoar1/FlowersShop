import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { UploadInterface } from '../models/upload';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private afs: AngularFirestore) {
    this.uploadColletion = afs.collection<UploadInterface>('uploads');
    this.uploads = this.uploadColletion.valueChanges();
   }
  
  private uploadColletion: AngularFirestoreCollection<UploadInterface>;
  private uploads: Observable<UploadInterface[]>;

  getUpload(){
    return this.uploads= this.uploadColletion.snapshotChanges()
    .pipe(map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as UploadInterface;
        data.id = action.payload.doc.id;
        return data;
      });
    }));
  }

  add(upload: UploadInterface): void{
    this.uploadColletion.add(upload);
  }
}

