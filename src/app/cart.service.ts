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
        { id: 0, name: 'Amarillos', price: '8', image: '/assets/img/tul-amarillo.png', category: 'Tulipanes'},
        { id: 1, name: 'Rosas', price: '5', image: '/assets/img/tul_blaro.png', category: 'Tulipanes' },
        { id: 2, name: 'Blancos', price: '9', image: '/assets/img/tul-blanco.png', category: 'Tulipanes' },
        { id: 3, name: 'Rojos', price: '7', image: '/assets/img/tul_rojo.png', category: 'Tulipanes' },
        { id: 4, name: 'Naranjas', price: '7', image: '/assets/img/tul_naranja.png', category: 'Tulipanes' }
      ]
    },
    {
      category: 'Rosas',
      expanded: true,
      products: [
        { id: 5, name: 'Rojas', price: '8', image: '/assets/img/rosa_roja.png', category: 'Rosas'},
        { id: 6, name: 'Blancas', price: '5', image: '/assets/img/rosa_blanca.png', category: 'Rosas' },
        { id: 7, name: 'Amarillas', price: '9', image: '/assets/img/rosa_amarilla.png', category: 'Rosas' },
        { id: 8, name: 'Rosas', price: '7', image: '/assets/img/rosa_rosa.png', category: 'Rosas' },
        { id: 9, name: 'Violeta', price: '7', image: '/assets/img/rosa_azul.png', category: 'Rosas' },

      ]
    },
    {
      category: 'Claveles',
      products: [
        { id: 10, name: 'Chino', price: '8', image: '/assets/img/Clavel_chino.png', category: 'Claveles' },
        { id: 11, name: 'Común', price: '6', image: '/assets/img/Clavel_comun.png', category: 'Claveles'  },
        { id: 12, name: 'Coronada', price: '8', image: '/assets/img/Clavel_coronada.png', category: 'Claveles'  },
        { id: 13, name: 'Poeta', price: '8', image: '/assets/img/clavel_poeta.png', category: 'Claveles'  },
        { id: 14, name: 'Roca', price: '8', image: '/assets/img/Clavel_roca.png', category: 'Claveles'  }
      ]
    },
    {
      category: 'Lirios',
      products: [
        { id: 15, name: 'Rosas', price: '8', image: '/assets/img/lirios_rosa.png', category: 'Lirios'  },
        { id: 16, name: 'Blancos', price: '5', image: '/assets/img/lirio_blanco.png', category: 'Lirios' },
        { id: 17, name: 'Naranjas', price: '9', image: '/assets/img/lirio_naranja.png', category: 'Lirios'  },
        { id: 18, name: 'Rojas', price: '9', image: '/assets/img/lirio_rojo.png', category: 'Lirios'  },
        { id: 19, name: 'Amarillas', price: '9', image: '/assets/img/lirio_amarillo.png', category: 'Lirios'  }
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