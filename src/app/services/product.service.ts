import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'T-Shirt', price: 19.99, image: 't-short.png', description: 'Comfortable cotton T-Shirt' },
    { id: 2, name: 'Mug', price: 9.99, image: 't-short.png', description: 'Ceramic mug, 300ml' },
    { id: 3, name: 'Cap', price: 14.99, image: 't-short.png', description: 'Baseball cap with logo' },
    { id: 4, name: 'Notebook', price: 6.49, image: 't-short.png', description: 'A5 ruled notebook' },
    { id: 5, name: 'Backpack', price: 39.99, image: 't-short.png', description: 'Durable backpack for everyday use' }
  ];

  getProducts(): Product[] {
    return [...this.products];
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(p => p.id === id);
  }
}
