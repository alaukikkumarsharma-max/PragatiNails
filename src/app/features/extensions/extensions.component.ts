import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../core/services/product.service';
import { ProductCardComponent } from '../../shared/components/product-card/product-card.component';
import { Observable } from 'rxjs';
import { Product } from '../../core/models/product.model';

@Component({
  standalone: true,
  selector: 'app-extensions',
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './extensions.component.html',
  styleUrls: ['./extensions.component.scss']
})
export class ExtensionsComponent {

  private productService = inject(ProductService);
  products$: Observable<Product[]> =
    this.productService.getByCategory('extensions');

}
