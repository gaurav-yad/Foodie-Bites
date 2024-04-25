import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  cartQuantity = 0;
  constructor(cartService:CartService){
      cartService.getCartObservable().subscribe((newCart)=>{
          this.cartQuantity = newCart.totalCount;
      })
  }
  ngOnInit(): void {

  }
}
