import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-community',
  templateUrl: './community.page.html',
  styleUrls: ['./community.page.scss'],
})
export class CommunityPage implements OnInit {

  image : any;

  constructor(private camera: Camera) { }

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
     }, (err) => {
      // Handle error
      console.error();
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
     }, (err) => {
      // Handle error
      console.error();
     });
  }
}
