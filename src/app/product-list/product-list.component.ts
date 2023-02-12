import { Component } from '@angular/core';
import { products, Product } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

  products = products;


  share(product: Product, e : Event) {
    e.stopPropagation();
    e.preventDefault();
    alert(`You are sharing the ${product.name}, id ${product.id}`)
  }

  onNotify(product: Product) {
    alert(`You will be notified when ${product.name} get price less than $700.`);
  }
}
