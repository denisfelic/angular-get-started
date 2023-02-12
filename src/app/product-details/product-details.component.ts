import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {

  product: Product | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;

    const productIdFromRoute = Number(routeParams.get('productId'));

    this.product = products.find(prod => prod.id === productIdFromRoute);
  }

  share(product: Product, e: Event) {
    alert('TODO')
  }

  onNotify(product: Product, e: Event) {
    alert('TODO')
  }

}
