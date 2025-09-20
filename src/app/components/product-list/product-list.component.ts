import { ChangeDetectorRef, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  imports: [CommonModule],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  cartItems: Record<number, number> = {}; // словарь id -> qty

  constructor(
    private productService: ProductService,
    private cart: CartService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  addToCart(product: Product) {
    this.cart.add(product, 1);
    this.increaseQty(product);
  }

  increaseQty(product: Product) {
    const qty = (this.cartItems[product.id] || 0) + 1;
    this.cartItems[product.id] = qty;
    this.cart.updateQuantity(product.id, qty);
  }

  decreaseQty(product: Product) {
    const qty = (this.cartItems[product.id] || 0) - 1;
    if (qty > -1) {
      this.cartItems[product.id] = qty;
      this.cart.updateQuantity(product.id, qty);
    }
  }
}
