import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, ValidationErrors, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {
  data:any;
  validations_form: FormGroup;
  validation_messages : ValidationErrors;
  constructor(private router: Router, public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.validations_form = this.formBuilder.group({
      tarjeta: new FormControl('', Validators.compose([
        Validators.maxLength(16),
        Validators.minLength(16),
      ])),
      fecha:new FormControl('', Validators.compose([
        Validators.maxLength(4),
        Validators.minLength(4),
      ])),
      cvc:new FormControl('', Validators.compose([
        Validators.maxLength(3),
        Validators.minLength(3),
      ]))
    });

    this.validation_messages = {
     
     
      'tarjeta': [
        { type: 'required', message: 'Número de tarjeta es requerida' },
        { type: 'minlength', message: 'Debe tener al mínimo 16 números' },
        { type: 'maxlength', message: 'Debe tener al máximo 16 números' },
      ],
      'fecha': [
        { type: 'required', message: 'Fecha de expiración es requerida' },
        { type: 'minlength', message: 'Debe tener al mínimo 4 números' },
        { type: 'maxlength', message: 'Debe tener al máximo 4 números' },
      ],
      'cvc': [
        { type: 'required', message: 'CVC es requerido' },
        { type: 'minlength', message: 'Debe tener al mínimo 3 números' },
        { type: 'maxlength', message: 'Debe tener al máximo 3 números' },
      ],
    };
  }
  ionViewWillEnter() {
    setTimeout(() => {
      this.data = {
      };
    }, 1000);
  }
  onSubmit(values){
    console.log(values);
  }


  pagar(){
    this.router.navigate(['notification']);
  }

}
