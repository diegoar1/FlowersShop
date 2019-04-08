import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { NavController } from '@ionic/angular';
import { Http } from '@angular/http';
import { Firebase } from '@ionic-native/firebase/ngx';
import * as firebase from "firebase";
import { File } from "@ionic-native/file/ngx";
import { AngularFireStorage } from '@angular/fire/storage';
import { IonicStorageModule } from '@ionic/storage';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.page.html',
  styleUrls: ['./upload.page.scss'],
})
export class UploadPage implements OnInit {
  
  image : any;
  imageURL: String;

  constructor(
    private camera: Camera, 
    public navCtrl: NavController, 
    public http: Http,
    public cameraPlugin: Camera,
    private file: File,
    private storage: AngularFireStorage,
    private ionicStorage: IonicStorageModule
    ) { }

  ngOnInit() {

  }

  takePhoto(
    options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    sourceType: this.camera.PictureSourceType.CAMERA,
    allowEdit: false,
    targetHeight : 1024,
    targetWidth : 1024,
    correctOrientation : true,
    saveToPhotoAlbum : true,
    mediaType: this.camera.MediaType.PICTURE
  }){
    this.camera.getPicture(options).then((imageData) => {
      //let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.image = 'data:image/jpeg;base64,' + imageData;
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
     }, (error) => {
      // Handle error
      console.log("ERROR -> " + JSON.stringify(error));
     });
  }

  useGallery(
    options: CameraOptions = {
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
  }){
    this.camera.getPicture(options).then((imageData) => {
      //let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.image = 'data:image/jpeg;base64,' + imageData;
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      this.onUpload();
     }, (err) => {
      // Handle error
      console.error();
     });
  }

  onUpload(){
    const filePath = 'community/image.jpeg'
    const file = Image;
    const task = this.storage.upload(filePath, file);
  }

}



