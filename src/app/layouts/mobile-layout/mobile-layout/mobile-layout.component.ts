import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MobileHeaderComponent } from '../mobile-header/mobile-header.component';
import { MobileFooterComponent } from '../mobile-foter/mobile-foter.component';
import { FloatingWhatsappComponent } from '../floating-whatsapp/floating-whatsapp.component';

@Component({
  selector: 'app-mobile-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    MobileHeaderComponent,
    MobileFooterComponent,
    FloatingWhatsappComponent
  ],
  templateUrl: './mobile-layout.component.html',
  styleUrls: ['./mobile-layout.component.scss']
})
export class MobileLayoutComponent {}
