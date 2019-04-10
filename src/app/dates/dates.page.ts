import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators, FormGroup, FormBuilder, ValidationErrors } from '@angular/forms';
import { NavController, LoadingController } from '@ionic/angular';
import { datos } from '../models/datos.interface';
import { DatosService } from '../services/datos.service';

@Component({
  selector: 'app-dates',
  templateUrl: './dates.page.html',
  styleUrls: ['./dates.page.scss'],
})
export class DatesPage implements OnInit {
  data:any;
  validations_form: FormGroup;
  genders: Array<string>;
  validation_messages : ValidationErrors;

  dato: datos = {
    calle: '',
    colonia: '',
    municipio: '',
    estado: '',
    codigo_postal: '',
    numero_exterior: '',
    numero_interior: '',
  };

  datoId= null;
  
  constructor(private datosService: DatosService, 
    private router : Router, 
    public formBuilder: FormBuilder, 
    private loadingController: LoadingController,
    private nav: NavController,
    ) { }

  ngOnInit() {
    this.genders = [
      "Quintana Roo",
      "Yucatán"
    ];

    this.validations_form = this.formBuilder.group({
      calle: new FormControl('', Validators.required),
      colonia: new FormControl('', Validators.required),
      municipio: new FormControl('', Validators.required),
      codigoP: new FormControl('', Validators.compose([
        Validators.maxLength(5),
        Validators.minLength(5),
      ])),
      numeroE:new FormControl('', Validators.compose([
        Validators.maxLength(8),
        Validators.minLength(2),
      ])),
      numeroI:new FormControl('', Validators.compose([
        Validators.maxLength(8),
        Validators.minLength(2),
      ])),
      gender: new FormControl(this.genders[0], Validators.required)
    });

    this.validation_messages = {
     
      'calle': [
        { type: 'required', message: 'Calle es requerida.' }
      ],
      'colonia': [
        { type: 'required', message: 'Colonia es requerida.' }
      ],
      'municipio': [
        { type: 'required', message: 'Municipio es requerido' },
      ],
      'codigoP': [
        { type: 'required', message: 'Código postal es requerido' },
        { type: 'minlength', message: 'Debe tener al mínimo 5 números' },
        { type: 'maxlength', message: 'Debe tener al máximo 5 números' },
      ],
      'numeroE': [
        { type: 'required', message: 'Número externo es requerido' },
        { type: 'minlength', message: 'Debe tener al mínimo 2 números' },
        { type: 'maxlength', message: 'Debe tener al máximo 5 números' },
      ],
      'numeroI': [
        { type: 'required', message: 'Número interno es requerido' },
        { type: 'minlength', message: 'Debe tener al mínimo 2 números' },
        { type: 'maxlength', message: 'Debe tener al máximo 5 números' },
      ],
    };
  }
  
  onSubmit(values){
    console.log(values);
  }

  
  ionViewWillEnter() {
    setTimeout(() => {
      this.data = {
      };
    }, 1000);
  }
  envia(){
    this.router.navigate(['pago']);
  }

  async save(){
    const loading = await this.loadingController.create({
      message: 'Saving....'
    });
    await loading.present();
    this.datosService.addDatos(this.dato).then(() => {
      loading.dismiss();
      this.nav.navigateForward('/pago');
    });
  }

}
