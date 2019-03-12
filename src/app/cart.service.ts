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
        { id: 0, name: 'Amarillos', price: '8', image: '/assets/img/tul-amarillo.png' },
        { id: 1, name: 'Rosas', price: '5', image: '/assets/img/tul_blaro.png' },
        { id: 2, name: 'Blancos', price: '9', image: '/assets/img/tul-blanco.png' },
        { id: 3, name: 'Rojos', price: '7', image: '/assets/img/tul_rojo.png' },
        { id: 4, name: 'Naranjas', price: '7', image: '/assets/img/tul_naranja.png' }
      ]
    },
    {
      category: 'Rosas',
      expanded: true,
      products: [
        { id: 5, name: 'Rojas', price: '8', image: '/assets/img/rosa_roja.png'},
        { id: 6, name: 'Blancas', price: '5', image: '/assets/img/rosa_blanca.png' },
        { id: 7, name: 'Amarillas', price: '9', image: '/assets/img/rosa_amarilla.png' },
        { id: 8, name: 'Rosas', price: '7', image: '/assets/img/rosa_rosa.png' },
        { id: 9, name: 'Violeta', price: '7', image: '/assets/img/rosa_azul.png' },

      ]
    },
    {
      category: 'Claveles',
      products: [
        { id: 10, name: 'Chino', price: '8', image: '/assets/img/Clavel_chino.png' },
        { id: 11, name: 'Común', price: '6', image: '/assets/img/Clavel_comun.png' },
        { id: 12, name: 'Coronada', price: '8', image: '/assets/img/Clavel_coronada.png' },
        { id: 13, name: 'Poeta', price: '8', image: '/assets/img/clavel_poeta.png' },
        { id: 14, name: 'Roca', price: '8', image: '/assets/img/Clavel_roca.png' }
      ]
    },
    {
      category: 'Lirios',
      products: [
        { id: 15, name: 'Rosas', price: '8', image: '/assets/img/lirios_rosa.png' },
        { id: 16, name: 'Blancos', price: '5', image: '/assets/img/lirio_blanco.png' },
        { id: 17, name: 'Naranjas', price: '9', image: '/assets/img/lirio_naranja.png' },
        { id: 18, name: 'Rojas', price: '9', image: '/assets/img/lirio_rojo.png' },
        { id: 19, name: 'Amarillas', price: '9', image: '/assets/img/lirio_amarillo.png' }
      ]
    },
    {
      category: 'Orquídeas',
      products: [
        { id: 20, name: 'Blancas', price: '8', image: '/assets/img/Orquidea_blanca.png' },
        { id: 21, name: 'Rosas', price: '5', image: '/assets/img/Orquidea_rosa.png' },
        { id: 22, name: 'Rojas', price: '9', image: '/assets/img/Orquidea_roja.png' },
        { id: 23, name: 'Artísticas', price: '9', image: '/assets/img/Orquidea_art.png' },
        { id: 24, name: 'Peculiar', price: '9', image: '/assets/img/orquidea_comb.png' }
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