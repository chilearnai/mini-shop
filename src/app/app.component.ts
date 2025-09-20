import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { CartService } from './services/cart.service';
import { AuthService } from './services/auth.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterOutlet, CommonModule, RouterLink],
})
export class AppComponent implements OnInit {
  user$: Observable<any | null>;

  cartCount = 0;
  constructor(
    private auth: AuthService,
    private cart: CartService,
  ) {
    this.user$ = this.auth.user$; // поток с состоянием пользователя
  }

  ngOnInit() {
    this.cart.itemsObservable.subscribe((items) => {
      this.cartCount = items.reduce((s, i) => s + i.qty, 0);
    });
  }

  logout() {
    this.auth.logout();
  }

  loginWithGoogle() {
    this.auth.loginWithGoogle();
  }
}
