import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent {

  shippingCosts!: Observable<{ type: string, price: number }[]>;


  constructor(
    private cartService: CartService,
  ) { }


  ngOnInit() {
    this.shippingCosts = this.cartService.getShippingPrices();
  }
}
