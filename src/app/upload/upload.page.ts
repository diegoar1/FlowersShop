import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { NavController } from '@ionic/angular';
import { Http } from '@angular/http';
import { Firebase } from '@ionic-native/firebase/ngx';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.page.html',
  styleUrls: ['./upload.page.scss'],
})
export class UploadPage implements OnInit {
  
  image : any;
  imageURL: String;
  desc: String;

  constructor(
    private camera: Camera, 
    public navCtrl: NavController, 
    public http: Http,
    public cameraPlugin: Camera
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
     }, (err) => {
      // Handle error
      console.error();
     });
  }

  fileChanged(event){
    const files = event.target.files
    console.log(files)

    const data = new FormData()
    data.append('file', files[0])
    data.append('UPLOADCARE_STORE', '1')
    data.append('UPLOADCARE_PUB_KEY', 'd7a5e1eb1d949cb30680')  

    this.http.post('https://upload.uploadcare.com/base/', data)
    .subscribe( event => {
      console.log(event) 
      this.imageURL = event.json().file
    })
  }
}
