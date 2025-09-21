import { EventEmitter, Input, Output } from '@angular/core';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  imports: [CommonModule],
})
export class CardComponent {

  @Input() product = {} as Product | any;
   @Input() cartItems = {} as Record<number, number>;
  @Output() addToCartEmit = new EventEmitter<Product>();
  @Output() increaseQtyEmit = new EventEmitter<Product>();
  @Output() decreaseQtyEmit = new EventEmitter<Product>();

  addToCart(product: Product) {
    this.addToCartEmit.emit(product)
  }

  increaseQty(product: Product) {
    this.increaseQtyEmit.emit(product)
  }

  decreaseQty(product: Product) {
    this.decreaseQtyEmit.emit(product)
  }
}
