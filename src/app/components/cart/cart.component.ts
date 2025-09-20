import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  imports: [CommonModule],
})
export class CartComponent implements OnInit {
  items: any[] = [];
  total = 0;

  constructor(private cart: CartService) {}

  ngOnInit(): void {
    this.cart.itemsObservable.subscribe((items) => {
      this.items = items;
      this.total = this.cart.getTotal();
      console.log(this.items, this.total);
    });
  }

  changeQty(item: any, ev: any) {
    const value = Number(ev.target.value);
    if (isNaN(value) || value < 0) return;
    this.cart.updateQuantity(item.product.id, value);
  }

  remove(item: any) {
    this.cart.remove(item.product.id);
  }

  clear() {
    this.cart.clear();
  }
}
