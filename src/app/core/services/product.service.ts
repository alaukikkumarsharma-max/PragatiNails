import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';
import { Observable, map, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productsUrl = 'assets/data/products.json';

  private products$: Observable<Product[]>;

  constructor(private http: HttpClient) {
    // Load once and cache
    this.products$ = this.http
      .get<Product[]>(this.productsUrl)
      .pipe(shareReplay(1));
  }

  /** Get all products */
  getAll(): Observable<Product[]> {
    return this.products$;
  }

  /** Get products by category */
  getByCategory(category: Product['category']): Observable<Product[]> {
    return this.products$.pipe(
      map(products => products.filter(p => p.category === category))
    );
  }

  /** Get single product by id */
  getById(id: string): Observable<Product | undefined> {
    return this.products$.pipe(
      map(products => products.find(p => p.id === id))
    );
  }
}
