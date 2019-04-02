import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NavController, Platform, ToastController, ActionSheetController, LoadingController } from '@ionic/angular';
import { Camera, PictureSourceType, CameraOptions } from '@ionic-native/camera/ngx';
import { File, FileEntry } from '@ionic-native/file/ngx';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { finalize } from 'rxjs/operators';


const STORAGE_KEY = 'my_images';

@Component({
  selector: 'app-community',
  templateUrl: './community.page.html',
  styleUrls: ['./community.page.scss'],
})
export class CommunityPage implements OnInit {

  images = [];

  constructor(
    public navCtrl: NavController,
    private camera: Camera,
    private file: File,
    private http: HttpClient,
    private storage: Storage,
    private plt: Platform,
    private ref: ChangeDetectorRef,
    private webview: WebView,
    private toastcontroller: ToastController,
    private actionSheetController: ActionSheetController, 
    private loadingController: LoadingController
  ) { }

  ngOnInit() {
    this.plt.ready().then(() => {
      this.loadStoredImages();
    });
  }

  loadStoredImages() {
    this.storage.get(STORAGE_KEY).then(images => {
      if (images) {
        let arr = JSON.parse(images);
        this.images = [];
        for (let img of arr) {
          let filePath = this.file.dataDirectory + img;
          let resPath = this.pathForImage(filePath);
          this.images.push({ name: img, path: resPath, filePath: filePath });
        }
      }
    });
  }

  pathForImage(img) {
    if (img === null) {
      return '';
    } else {
      let converted = this.webview.convertFileSrc(img);
      return converted;
    }
  }

  async presentToast(text) {
    const toast = await this.toastcontroller.create({
      message: text,
      position: 'bottom',
      duration: 3000
    });
    toast.present();
  }

  async selectImage() {
    const actionSheet = await this.actionSheetController.create({
      header: 'select image',
      buttons: [{
        text: 'Load from library',
        handler: () => {
          this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
        }
      },
      {
        text: 'Use camera',
        handler: () => {
          this.takePicture(this.camera.PictureSourceType.CAMERA);
        }
      },
      {
        text: 'Cancel',
        role: 'cancel'
      }
      ]
    });
    await actionSheet.present();
  }

  takePicture(SourceType: PictureSourceType) {
    var options: CameraOptions = {
      quality: 100,
      sourceType: SourceType,
      saveToPhotoAlbum: true,
      correctOrientation: true,
    };

    this.camera.getPicture(options).then(imagePath => {
      var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
      var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
      this.copyFileLocalDir(correctPath, currentName, this.createFileName());
    });
  }

  copyFileLocalDir(namePath, currentName, newFileName) {
    this.file.copyFile(namePath, currentName, this.file.dataDirectory, newFileName).then(_ => {
      this.updateStoredImages(newFileName);
    }, error => {
      this.presentToast('Error while storing file');
    });
  }

  updateStoredImages(name) {
    this.storage.get(STORAGE_KEY).then(images => {
      let arr = JSON.parse(images);
      if (!arr) {
        let newImages = [name];
        this.storage.set(STORAGE_KEY, JSON.stringify(newImages));
      } else {
        arr.push(name);
        this.storage.set(STORAGE_KEY, JSON.stringify(arr));
      }

      let filePath = this.file.dataDirectory + name;
      let resPath = this.pathForImage(filePath);

      let newEntry = {
        name: name,
        path: resPath,
        filePath: filePath
      };

      this.images = [newEntry, ...this.images];
      this.ref.detectChanges();
    });
  }

  createFileName() {
    var d = new Date(),
      n = d.getTime(),
      newFileName = n + ".jpg";
    return newFileName;
  }

  delete(imgEntry, position) {
    this.images.splice(position, 1);
    this.storage.get(STORAGE_KEY).then(images => {
      let arr = JSON.parse(images);
      let filtered = arr.filter(name => name != imgEntry.name);
      this.storage.set(STORAGE_KEY, JSON.stringify(filtered));

      var correctPath = imgEntry.filePath.substr(0, imgEntry.filePath.lastIndexOf('/') + 1);
      this.file.removeFile(correctPath, imgEntry.name).then(res => {
        this.presentToast('File removed');
      });
    });
  }

  startUpload(imgEntry){
    this.file.resolveLocalFilesystemUrl(imgEntry.filePath).then(entry  => {
      (<FileEntry>entry).file(file => this.readFile(file))
    }).catch(err => {
      this.presentToast('Error while reading file');
    })
  }

  readFile(file: any){
    const reader = new FileReader();
    reader.onloadend = () => {
      const formData = new FormData();
      const imgBlob  = new Blob([reader.result], {
        type: file.type
      });
      formData.append('file', imgBlob, file.name);
      this.uploadImageData(formData);
    };
    reader.readAsArrayBuffer(file);
  }

  async uploadImageData(formData: FormData){
    const loading = await this.loadingController.create({
      
    });
    await loading.present();

    this.http.post("htttp://localhost:8888/upload.php", formData)
    .pipe(
      finalize(() => {
        loading.dismiss();
      })
    )
    .subscribe(res => {
      if(res ['success']) {
        this.presentToast('File upload complete')
      }else {
        this.presentToast('File upload failed')
      }
    });
  }

  uploader() {
    this.navCtrl.navigateRoot('/upload');
  }
  
}
