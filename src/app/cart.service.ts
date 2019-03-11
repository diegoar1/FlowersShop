import { Injectable } from '@angular/core';
 
@Injectable({
  providedIn: 'root'
})
export class CartService {
 
  private data = [
    {
      category: 'Tulipanes',
      expanded: true,
      products: [
        { id: 0, name: 'Amarillos', price: '8', image: '' },
        { id: 1, name: 'Rosas', price: '5', image: '' },
        { id: 2, name: 'Blancos', price: '9', image: '' },
        { id: 3, name: 'Rosas', price: '7', image: '' },
        { id: 4, name: 'Rosas', price: '7', image: '' }
      ]
    },
    {
      category: 'Rosas',
      expanded: true,
      products: [
        { id: 5, name: 'Rojas', price: '8', image: ''},
        { id: 6, name: 'Blancas', price: '5', image: '' },
        { id: 7, name: 'Amarillas', price: '9', image: '' },
        { id: 8, name: 'Rosas', price: '7', image: '' },
        { id: 9, name: 'Violeta', price: '7', image: '' },

      ]
    },
    {
      category: 'Claveles',
      products: [
        { id: 10, name: 'Chino', price: '8', image: '/assets/img/Clavel_chino.png' },
        { id: 11, name: 'Común', price: '6', image: '/assets/img/Clavel_comun.png' },
        { id: 12, name: 'Coronada', price: '8', image: '/assets/img/Clavel_coronada.png' },
        { id: 13, name: 'Poeta', price: '8', image: '/assets/img/Clavel_poeta.png' },
        { id: 14, name: 'Roca', price: '8', image: '/assets/img/Clavel_roca.png' }
      ]
    },
    {
      category: 'Lirios',
      products: [
        { id: 15, name: 'Ham & Egg', price: '8', image: '' },
        { id: 16, name: 'Basic', price: '5', image: '' },
        { id: 17, name: 'Ceaser', price: '9', image: '' },
        { id: 18, name: 'Ceaser', price: '9', image: '' },
        { id: 19, name: 'Ceaser', price: '9', image: '' }
      ]
    },
    {
      category: 'Orquídeas',
      products: [
        { id: 20, name: 'Blanca', price: '8', image: '/assets/img/Orquidea_blanca.png' },
        { id: 21, name: 'Rosa', price: '5', image: '/assets/img/Orquidea_rosa.png' },
        { id: 22, name: 'Roja', price: '9', image: '/assets/img/Orquidea_roja.png' },
        { id: 23, name: 'Artística', price: '9', image: '/assets/img/Orquidea_art.png' },
        { id: 24, name: 'Ceaser', price: '9', image: '/assets/img/Orquidea_blanca.png' }
      ]
    }
  ];
 
  private cart = [];
 
  constructor() { }
 
  getProducts() {
    return this.data;
  }
 
  getCart() {
    return this.cart;
  }
 
  addProduct(product) {
    this.cart.push(product);
  }
}