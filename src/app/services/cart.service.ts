import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product';

interface CartItem { product: Product; qty: number; }

@Injectable({ providedIn: 'root' })
export class CartService {
  private items: CartItem[] = [];
  private itemsSubject = new BehaviorSubject<CartItem[]>([]);
  itemsObservable = this.itemsSubject.asObservable();

  constructor() {
    this.load();
  }

  private save() {
    try {
      localStorage.setItem('mini_shop_cart', JSON.stringify(this.items));
    } catch (e) {
      // ignore
    }
    this.itemsSubject.next([...this.items]);
  }

  private load() {
    const raw = localStorage.getItem('mini_shop_cart');
    if (raw) {
      try {
        this.items = JSON.parse(raw) || [];
      } catch (e) {
        this.items = [];
      }
    }
    this.itemsSubject.next([...this.items]);
  }

  getItems() {
    return [...this.items];
  }

  add(product: Product, qty: number = 1) {
    const idx = this.items.findIndex(i => i.product.id === product.id);
    if (idx > -1) {
      this.items[idx].qty += qty;
    } else {
      this.items.push({ product, qty });
    }
    this.save();
  }

  updateQuantity(productId: number, qty: number) {
    const idx = this.items.findIndex(i => i.product.id === productId);
    if (idx > -1) {
      if (qty <= 0) {
        this.items.splice(idx, 1);
      } else {
        this.items[idx].qty = qty;
      }
      this.save();
    }
  }

  remove(productId: number) {
    this.items = this.items.filter(i => i.product.id !== productId);
    this.save();
  }

  clear() {
    this.items = [];
    this.save();
  }

  getTotal(): number {
    return this.items.reduce((s, i) => s + i.product.price * i.qty, 0);
  }

  getCount(): number {
    return this.items.reduce((s, i) => s + i.qty, 0);
  }
}
