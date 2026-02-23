import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../core/services/product.service';
import { ProductCardComponent } from '../../shared/components/product-card/product-card.component';
import { Observable, Subscribable } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-stickers',
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './stickers.component.html',
  styleUrls: ['./stickers.component.scss']
})
export class StickersComponent {

  private productService = inject(ProductService);
products$: Observable<undefined> | Subscribable<undefined> | Promise<undefined> | undefined;

  ngOnInit(): void {
    this.productService.getByCategory('stickers');
  }
}
