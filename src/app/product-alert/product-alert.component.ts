import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alert',
  templateUrl: './product-alert.component.html',
  styleUrls: ['./product-alert.component.scss']
})
export class ProductAlertComponent {

  @Input() product!: Product;
  @Output() notify = new EventEmitter();

  notified = false;

  handleNotify() {
    this.notified = true;
    setTimeout(() => {
      this.notify.emit();
    }, 10);
  }
}
