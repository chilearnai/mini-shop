import { Component, OnInit } from '@angular/core';
import { CartService } from './services/cart.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false
})
export class AppComponent implements OnInit {
  cartCount = 0;
  constructor(private cart: CartService) {}

  ngOnInit() {
    this.cart.itemsObservable.subscribe(items => {
      this.cartCount = items.reduce((s, i) => s + i.qty, 0);
    });
  }
}
