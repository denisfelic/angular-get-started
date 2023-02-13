import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';
import { Product } from '../products';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent {

  items: Product[] = this.cartService.getItems();

  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
  });


  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) {
  }

  onSubmit() {


    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
    this.items = this.cartService.clearCart();
  }


}
