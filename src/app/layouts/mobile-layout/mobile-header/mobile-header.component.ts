import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { WhatsappService } from '../../../core/services/whatsapp.service';
import { MobileMenuComponent } from "../mobile-menu/mobile-menu.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mobile-header',
  standalone: true,
  imports: [RouterLink, MobileMenuComponent, CommonModule],
  templateUrl: './mobile-header.component.html',
  styleUrls: ['./mobile-header.component.scss']
})
export class MobileHeaderComponent {
  constructor(private whatsapp: WhatsappService) {}
  openWhatsApp(): void {
    this.whatsapp.openGeneralChat();
  }
   isMenuOpen = false;

  toggleMenu(): void {
    console.log('Menu clicked');
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

}
