import { Component, OnInit } from '@angular/core';
import { Cart } from '../../../shared/model/Cart';
import { CartService } from '../../../services/cart.service';
import { CartItem } from '../../../shared/model/Cartitem';
import { TitleComponent } from '../title/title.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [TitleComponent, CommonModule, RouterLink],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent implements OnInit{
  cart!:Cart;
  constructor(private cartService:CartService){
    this.cartService.getCartObservable().subscribe(cart=>{
      this.cart = cart;
    })
  }

  ngOnInit(): void {
    
  }

  removeFromCart(cartItem:CartItem){
      this.cartService.removeFromCart(cartItem.food.id);
  }

  changeQuantity(cartItem : CartItem, quantity : string){
      const q = parseInt(quantity);
      this.cartService.changeQuantity(cartItem.food.id, q);
  }
}
