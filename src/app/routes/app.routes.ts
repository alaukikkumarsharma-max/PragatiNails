import { Routes } from '@angular/router';
import { MobileLayoutComponent } from '../layouts/mobile-layout/mobile-layout/mobile-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: MobileLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('../features/home/home.component')
            .then(m => m.HomeComponent)
      },
      {
        path: 'extensions',
        loadComponent: () =>
          import('../features/extensions/extensions.component')
            .then(m => m.ExtensionsComponent)
      },
      {
        path: 'stickers',
        loadComponent: () =>
          import('../features/stickers/stickers.component')
            .then(m => m.StickersComponent)
      },
      {
        path: 'product/:id',
        loadComponent: () =>
          import('../features/product-detail/product-detail.component')
            .then(m => m.ProductDetailComponent)
      },
      {
        path: 'contact',
        loadComponent: () =>
          import('../features/contact/contact.component')
            .then(m => m.ContactComponent)
      }
    ]
  },

  // Fallback (optional but professional)
  {
    path: '**',
    redirectTo: ''
  }
];
