import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { NavController, LoadingController } from '@ionic/angular';
import { Http } from '@angular/http';
import { File } from "@ionic-native/file/ngx";
import { AngularFireStorage } from '@angular/fire/storage';
import { IonicStorageModule } from '@ionic/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { UploadService } from '../services/upload.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
@Component({
  selector: 'app-upload',
  templateUrl: './upload.page.html',
  styleUrls: ['./upload.page.scss'],
})
export class UploadPage implements OnInit {
  image: any;
  imageURL: String;
  uploadPercent: Observable<number>;
  urlImage: Observable<string>;
  urlP: string = '';
  uploadCollectionRef: AngularFirestoreCollection<any>;
  uploadI: Observable<any[]>;
  constructor(private camera: Camera, private afs: AngularFirestore, public navCtrl: NavController, 
    public http: Http, public cameraPlugin: Camera, private file: File,
     private storage: AngularFireStorage, private ionicStorage: IonicStorageModule,   private upload: UploadService, private loading: LoadingController) {

      this.uploadCollectionRef = this.afs.collection<any>('uploads');
      this.uploadI = this.uploadCollectionRef.snapshotChanges().map(actions => {
      return actions.map(action => {
        const data = action.payload.doc.data() as any;
        const id = action.payload.doc.id;
        return { id, ...data };
      });
    });
  }
  ngOnInit() {
  }
  async takePhoto(file) {
    try {
      const options: CameraOptions = {
        quality: 100,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        sourceType: this.camera.PictureSourceType.CAMERA,
        allowEdit: false,
        targetHeight: 1024,
        targetWidth: 1024,
        correctOrientation: true,
        saveToPhotoAlbum: true,
        mediaType: this.camera.MediaType.PICTURE
      };
      const id = Math.random().toString(36).substring(2);
      const result = await this.camera.getPicture(options);
     
      const filePath = `pictures/${id}`;
      this.image = `data:image/jpeg;base64,${result}`;
      const pictures = this.storage.ref(filePath);
       const task = this.storage.upload(filePath, file);
      task.snapshotChanges().pipe(finalize(() => this.urlImage = pictures.getDownloadURL())).subscribe(); 
    }
    catch (e) {
      console.error(e);
    }
  }
  /* {
    task.snapshotChanges().pipe(finalize(() => {
      this.urlImage = pictures.getDownloadURL()
      this.urlImage.subscribe(url => (this.urlP = url)); console.log(this.urlP);
    
    })).subscribe();
   */
  /* async useGallery(file){
    try{
      const options: CameraOptions = {
        quality: 100,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
        allowEdit: false,
        targetHeight : 1024,
        targetWidth : 1024,
        correctOrientation : true,
        saveToPhotoAlbum : true,
        mediaType: this.camera.MediaType.PICTURE
    }
 
    const id = Math.random().toString(36).substring(2);
 
      const result = await this.camera.getPicture(options);
      const filePath = `galery/${id}`;
      this.image = `data:image/jpeg;base64,${result}`;
      
      
      const pictures = this.storage.ref(filePath);
      console.log('1');
      
      // pictures.putString(this.image, 'data_url');
 
 
      const task = this.storage.upload(id, file);
      
      console.log(task);
      
      this.uploadPercent =task.percentageChanges();
      task.snapshotChanges().pipe(finalize(() => {
        this.urlImage = pictures.getDownloadURL()
      console.log('ddd'+this.urlImage);
      
      
        this.urlImage.subscribe(url => (this.urlP = url));
        
        console.log(this.urlP);
        
      })).subscribe();
    }catch(e){
      console.error(e);
  }
  }
 */
  add(uploadForm: NgForm): void {
    this.upload.add(uploadForm.value);
    uploadForm.resetForm();
  }
}
