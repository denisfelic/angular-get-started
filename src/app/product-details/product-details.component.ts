import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { Product, products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {

  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
  ) { }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;

    const productIdFromRoute = Number(routeParams.get('productId'));

    this.product = products.find(prod => prod.id === productIdFromRoute);
  }

  addToCart(product: Product) {
    alert(`The product ${product.name} has been added to your cart`);
    this.cartService.addToCart(product);
  }

  onNotify(product: Product, e: Event) {
    alert('TODO')
  }

}
