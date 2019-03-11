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
        { id: 0, name: 'Amarillos', price: '8' },
        { id: 1, name: 'Rosas', price: '5' },
        { id: 2, name: 'Blancos', price: '9' },
        { id: 3, name: 'Rosas', price: '7' }
      ]
    },
    {
      category: 'Rosas',
      expanded: true,
      products: [
        { id: 0, name: 'Rojas', price: '8' },
        { id: 1, name: 'Blancas', price: '5' },
        { id: 2, name: 'Amarillas', price: '9' },
        { id: 3, name: 'Rosas', price: '7' },
        { id: 4, name: 'Violeta', price: '7' },

      ]
    },
    {
      category: 'Claveles',
      products: [
        { id: 4, name: 'Mac & Cheese', price: '8' },
        { id: 5, name: 'Bolognese', price: '6' }
      ]
    },
    {
      category: 'Lirios',
      products: [
        { id: 6, name: 'Ham & Egg', price: '8' },
        { id: 7, name: 'Basic', price: '5' },
        { id: 8, name: 'Ceaser', price: '9' }
      ]
    },
    {
      category: 'Orquídeas',
      products: [
        { id: 6, name: 'Ham & Egg', price: '8' },
        { id: 7, name: 'Basic', price: '5' },
        { id: 8, name: 'Ceaser', price: '9' }
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