import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../core/services/product.service';
import { WhatsappService } from '../../core/services/whatsapp.service';
import { Product } from '../../core/models/product.model';
import { Observable, switchMap } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-product-detail',
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {
  product$!: Observable<Product | undefined>;
  selectedSize = 'M';
  quantity = 1;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private whatsapp: WhatsappService
  ) {
    this.product$ = this.route.paramMap.pipe(
      switchMap(params =>
        this.productService.getById(params.get('id')!)
      )
    );
  }

  order(product: Product): void {
    this.whatsapp.openOrder(product, this.selectedSize, this.quantity);
  }
}
